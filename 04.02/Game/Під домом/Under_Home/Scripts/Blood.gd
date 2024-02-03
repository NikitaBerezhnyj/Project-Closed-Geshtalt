extends CPUParticles2D

var blood_loss_timer = 30

func _on_timer_timeout():
	set_process(false)
	set_physics_process(false)
	set_process_input(false)
	set_process_internal(false)
	set_process_unhandled_input(false)
	set_process_unhandled_key_input(false)
	await get_tree().create_timer(blood_loss_timer).timeout
	queue_free()
