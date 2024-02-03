extends Node2D

var new_world = true

var player_instantiate
var player_spawn_position = Vector2(0 ,0)
var player_obj = preload("res://Scenes/Characters/Player.tscn")

var room
var room_instantiate
var room_generate_position = Vector2(0, 0)

var up_room = 0
var storyes_room = 0
var past_item = Vector2(0, 0)
var horizontal_space = 1152
var vertical_space = 656

var rand_room = 0
var is_start = true
var is_finish = false
var is_up_room = false
var is_not_up_room = false
var is_pre_up_room = false
var is_story_room = false

# Сід - це масив строк де кожен рядок означає певну кімнату:
# __________________________________________________________________
# звич.г.0 - звичайна горизонтальна кімната 0; 
# звич.г.1 - звичайна горизонтальна кімната 1;
# звич.г.2 - звичайна горизонтальна кімната 2;
# __________________________________________________________________
# звич.п.0 - звичайна передвертикальна кімната 0; 
# звич.п.1 - звичайна передвертикальна кімната 1;
# звич.п.2 - звичайна передвертикальна кімната 2;
# __________________________________________________________________
# звич.в.0 - звичайна вертикальна кімната 0; 
# звич.в.1 - звичайна вертикальна кімната 1;
# звич.в.2 - звичайна вертикальна кімната 2;
# __________________________________________________________________
# сюжет.г.0 - сюжетна горизонтальна кімната 0; 
# сюжет.г.1 - сюжетна горизонтальна кімната 1;
# сюжет.г.0 - сюжетна горизонтальна кімната 2;
# __________________________________________________________________
# сюжет.п.0 - сюжетна передвертикальна кімната 0; 
# сюжет.п.1 - сюжетна передвертикальна кімната 1;
# сюжет.п.0 - сюжетна передвертикальна кімната 2;
# __________________________________________________________________
# сюжет.в.0 - сюжетна вертикальна кімната 0; 
# сюжет.в.1 - сюжетна вертикальна кімната 1;
# сюжет.в.0 - сюжетна вертикальна кімната 2;
# __________________________________________________________________
# старт - стартова кімната;
# __________________________________________________________________
# фініш.г - кінцева горизонтальна кімната;
# фініш.п - кінцева передвертикальна кімната;
# фініш.в - кінцева вертикальна кімната.
# __________________________________________________________________
var SEED = []

# Стартова кімната
var start_room = preload("res://Scenes/Rooms/start_room.tscn")
# Горизонтальні кімнати
var simple_rooms_h = [
	preload("res://Scenes/Rooms/Horizontal/simple_room_0.tscn"), 
	preload("res://Scenes/Rooms/Horizontal/simple_room_1.tscn"),
	preload("res://Scenes/Rooms/Horizontal/simple_room_2.tscn"),
]
var story_rooms_h = [
	preload("res://Scenes/Rooms/Horizontal/story_room_0.tscn"),
	preload("res://Scenes/Rooms/Horizontal/story_room_1.tscn"), 
	preload("res://Scenes/Rooms/Horizontal/story_room_2.tscn"),
]
# Вертикальні кімнати
var simple_rooms_v = [
	preload("res://Scenes/Rooms/Vertical/up/simple_room_1.tscn"),
	preload("res://Scenes/Rooms/Vertical/up/simple_room_0.tscn"), 
	preload("res://Scenes/Rooms/Vertical/up/simple_room_2.tscn")
]
var story_rooms_v = [
	preload("res://Scenes/Rooms/Vertical/up/story_room_0.tscn"),
	preload("res://Scenes/Rooms/Vertical/up/story_room_1.tscn"), 
	preload("res://Scenes/Rooms/Vertical/up/story_room_2.tscn")
]
# Перехідні вертикальні кімнати
var simple_rooms_pre_v = [
	preload("res://Scenes/Rooms/Vertical/pre-up/simple_room_0.tscn"), 
	preload("res://Scenes/Rooms/Vertical/pre-up/simple_room_1.tscn"),
	preload("res://Scenes/Rooms/Vertical/pre-up/simple_room_2.tscn")
]
var story_rooms_pre_v = [
	preload("res://Scenes/Rooms/Vertical/pre-up/story_room_0.tscn"),
	preload("res://Scenes/Rooms/Vertical/pre-up/story_room_1.tscn"), 
	preload("res://Scenes/Rooms/Vertical/pre-up/story_room_2.tscn")
]
# Фінальні кімнати
var finish_rooms = [
	preload("res://Scenes/Rooms/finish_room_h.tscn"),
	preload("res://Scenes/Rooms/finish_room_pre_v.tscn"),
	preload("res://Scenes/Rooms/finish_room_v.tscn")
]

var min_lenth_game = (story_rooms_h.size() - 1) * 2 + 2
var max_lenth_game = (story_rooms_h.size() - 1) * randi_range(3, 5) + 2
var max_map = randi_range(max_lenth_game, min_lenth_game)

# Запуск при старті
func _ready():
	if new_world == true:
		rooms_generator()
		player_load()
	else:
		rooms_load()
		player_load()
	
# Завантаження гравця
func player_load():
	player_instantiate = player_obj.instantiate()
	player_spawn_position = Vector2(1700, 300)
	player_instantiate.set_position(player_spawn_position)
	add_child(player_instantiate)

# Генератор кімнат
func rooms_generator():
	storyes_room = round(max_map / (story_rooms_h.size()))
	print("min_lenth_game: ", min_lenth_game)
	print("max_lenth_game: ", max_lenth_game)
	print("max_map: ", max_map)
	print("story_rooms_h.size():", story_rooms_h.size())
	print("storyes_room:", storyes_room)
	up_room = round(max_map / randi_range(1, 4))
	past_item = [0, 0]
	for map in max_map:
		if map % storyes_room == 0 and map != 0:
			is_start = false
			is_finish = false
			is_story_room = true
		# Завантажуємо початкову сцену
		elif map == 0:
			is_start = true
			is_finish = false
		# Завантажуємо кінцеву сцену
		elif map == max_map - 1:
			is_start = false
			is_finish = true
		else:
			is_start = false
			is_finish = false
			is_story_room = false
			
		# Передпідйом
		if (map + 1) % up_room == 0 and map != 0:
			is_up_room = false
			is_pre_up_room = true
			is_not_up_room = false
			past_item[0] += horizontal_space
		# Підйом
		elif map % up_room == 0 and map != 0:
			is_up_room = true
			is_pre_up_room = false
			is_not_up_room = false
			past_item[1] -= vertical_space
		# Не підйом
		else:
			is_up_room = false
			is_pre_up_room = false
			is_not_up_room = true
			past_item[0] += horizontal_space
			
		if is_start:
			room = start_room
			SEED.append("старт")
		elif is_finish:
			if is_not_up_room:
				room = finish_rooms[0]
				SEED.append("фініш.г")
			elif is_pre_up_room:
				room = finish_rooms[1]
				SEED.append("фініш.п")
			else:
				room = finish_rooms[2]
				SEED.append("фініш.в")
		elif is_not_up_room:
			if is_story_room:
				rand_room = randi_range(0, story_rooms_h.size() - 1)
				room = story_rooms_h[rand_room]
				story_rooms_h.remove_at(rand_room)
				story_rooms_pre_v.remove_at(rand_room)
				story_rooms_v.remove_at(rand_room)
				if rand_room == 0:
					SEED.append("сюжет.г.0")
				elif rand_room == 1:
					SEED.append("сюжет.г.1")
				else:
					SEED.append("сюжет.г.2")
			else:
				rand_room = randi_range(0, simple_rooms_h.size() - 1)
				# room = simple_rooms_h[rand_room]
				room = simple_rooms_h[0]
				if rand_room == 0:
					SEED.append("звич.г.0")
				elif rand_room == 1:
					SEED.append("звич.г.1")
				else:
					SEED.append("звич.г.2")
		elif is_pre_up_room:
			if is_story_room:
				rand_room = randi_range(0, story_rooms_pre_v.size() - 1)
				room = story_rooms_pre_v[rand_room]
				story_rooms_h.remove_at(rand_room)
				story_rooms_pre_v.remove_at(rand_room)
				story_rooms_v.remove_at(rand_room)
				if rand_room == 0:
					SEED.append("сюжет.п.0")
				elif rand_room == 1:
					SEED.append("сюжет.п.1")
				else:
					SEED.append("сюжет.п.2")
			else:
				rand_room = randi_range(0, simple_rooms_pre_v.size() - 1)
				# room = simple_rooms_pre_v[rand_room]
				room = simple_rooms_pre_v[0]
				if rand_room == 0:
					SEED.append("звич.п.0")
				elif rand_room == 1:
					SEED.append("звич.п.1")
				else:
					SEED.append("звич.п.2")
		elif is_up_room:
			if is_story_room:
				rand_room = randi_range(0, story_rooms_v.size() - 1)
				room = story_rooms_v[rand_room]
				story_rooms_h.remove_at(rand_room)
				story_rooms_pre_v.remove_at(rand_room)
				story_rooms_v.remove_at(rand_room)
				if rand_room == 0:
					SEED.append("сюжет.в.0")
				elif rand_room == 1:
					SEED.append("сюжет.в.1")
				else:
					SEED.append("сюжет.в.2")
			else:
				rand_room = randi_range(0, simple_rooms_v.size() - 1)
				# room = simple_rooms_v[rand_room]
				room = simple_rooms_v[rand_room]
				if rand_room == 0:
					SEED.append("звич.в.0")
				elif rand_room == 1:
					SEED.append("звич.в.1")
				else:
					SEED.append("звич.в.2")
		
		room_instantiate = room.instantiate()
		room_generate_position = Vector2(past_item[0], past_item[1])
		room_instantiate.set_position(room_generate_position)
		add_child(room_instantiate)
	Global.seed = SEED

func rooms_load():
	SEED = ["старт", "звич.п.1", "звич.в.1", "звич.п.2", "звич.в.0", "звич.п.0", "звич.в.1", "звич.п.0", "звич.в.0", "сюжет.п.1", "звич.в.0", "звич.п.1", "фініш.в"]
	for map in SEED.size() - 1:
		match SEED[map]:
			"старт":
				room = start_room
				past_item[0] += horizontal_space
			"звич.г.0":
				room = simple_rooms_h[0]
				past_item[0] += horizontal_space
			"звич.г.1":
				room = simple_rooms_h[1]
				past_item[0] += horizontal_space
			"звич.г.2":
				room = simple_rooms_h[2]
				past_item[0] += horizontal_space
			"звич.п.0":
				room = simple_rooms_pre_v[0]
				past_item[0] += horizontal_space
			"звич.п.1":
				room = simple_rooms_pre_v[1]
				past_item[0] += horizontal_space
			"звич.п.2":
				room = simple_rooms_pre_v[2]
				past_item[0] += horizontal_space
			"звич.в.0":
				room = simple_rooms_v[0]
				past_item[1] -= vertical_space
			"звич.в.1":
				room = simple_rooms_v[1]
				past_item[1] -= vertical_space
			"звич.в.2":
				room = simple_rooms_v[2]
				past_item[1] -= vertical_space
			"сюжет.г.0":
				room = story_rooms_h[0]
				past_item[0] += horizontal_space
			"сюжет.г.1":
				room = story_rooms_h[1]
				past_item[0] += horizontal_space
			"сюжет.г.2":
				room = story_rooms_h[2]
				past_item[0] += horizontal_space
			"сюжет.п.0":
				room = story_rooms_pre_v[0]
				past_item[0] += horizontal_space
			"сюжет.п.1":
				room = story_rooms_pre_v[1]
				past_item[0] += horizontal_space
			"сюжет.п.2":
				room = story_rooms_pre_v[2]
				past_item[0] += horizontal_space
			"сюжет.в.0":
				room = story_rooms_v[0]
				past_item[1] -= vertical_space
			"сюжет.в.1":
				room = story_rooms_v[1]
				past_item[1] -= vertical_space
			"сюжет.в.2":
				room = story_rooms_v[2]
				past_item[1] -= vertical_space
			"фініш.г":
				room = finish_rooms[0]
			"фініш.п":
				room = finish_rooms[1]
			"фініш.п":
				room = finish_rooms[2]
		
		room_instantiate = room.instantiate()
		room_generate_position = Vector2(past_item[0], past_item[1])
		room_instantiate.set_position(room_generate_position)
		add_child(room_instantiate)
	print(SEED)
