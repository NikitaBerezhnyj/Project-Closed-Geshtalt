################################################################################
## Ініціалізація
################################################################################

init offset = -1


################################################################################
## Стилі
################################################################################

style default:
    properties gui.text_properties()
    language gui.language

style input:
    properties gui.text_properties("input", accent=True)
    adjust_spacing False

style hyperlink_text:
    properties gui.text_properties("hyperlink", accent=True)
    hover_underline True

style gui_text:
    properties gui.text_properties("interface")


style button:
    properties gui.button_properties("button")

style button_text is gui_text:
    properties gui.text_properties("button")
    yalign 0.5


style label_text is gui_text:
    properties gui.text_properties("label", accent=True)

style prompt_text is gui_text:
    properties gui.text_properties("prompt")


style bar:
    ysize gui.bar_size
    left_bar Frame("gui/bar/left.png", gui.bar_borders, tile=gui.bar_tile)
    right_bar Frame("gui/bar/right.png", gui.bar_borders, tile=gui.bar_tile)

style vbar:
    xsize gui.bar_size
    top_bar Frame("gui/bar/top.png", gui.vbar_borders, tile=gui.bar_tile)
    bottom_bar Frame("gui/bar/bottom.png", gui.vbar_borders, tile=gui.bar_tile)

style scrollbar:
    ysize gui.scrollbar_size
    base_bar Frame("gui/scrollbar/horizontal_[prefix_]bar.png", gui.scrollbar_borders, tile=gui.scrollbar_tile)
    thumb Frame("gui/scrollbar/horizontal_[prefix_]thumb.png", gui.scrollbar_borders, tile=gui.scrollbar_tile)

style vscrollbar:
    xsize gui.scrollbar_size
    base_bar Frame("gui/scrollbar/vertical_[prefix_]bar.png", gui.vscrollbar_borders, tile=gui.scrollbar_tile)
    thumb Frame("gui/scrollbar/vertical_[prefix_]thumb.png", gui.vscrollbar_borders, tile=gui.scrollbar_tile)

style slider:
    ysize gui.slider_size
    base_bar Frame("gui/slider/horizontal_[prefix_]bar.png", gui.slider_borders, tile=gui.slider_tile)
    thumb "gui/slider/horizontal_[prefix_]thumb.png"

style vslider:
    xsize gui.slider_size
    base_bar Frame("gui/slider/vertical_[prefix_]bar.png", gui.vslider_borders, tile=gui.slider_tile)
    thumb "gui/slider/vertical_[prefix_]thumb.png"


style frame:
    padding gui.frame_borders.padding
    background Frame("gui/frame.png", gui.frame_borders, tile=gui.frame_tile)



################################################################################
## Екрани в грі
################################################################################


## Екран розмови ###############################################################
##
## Екран say використовується для відображення діалогу гравцеві. Він приймає
## два параметри, хто і що, ім'я персонажа, що говорить, і текст, який буде
## відображатися відповідно. (Параметр who може мати значення None, якщо ім’я не
## вказано.)
##
## Цей екран має створювати текст, який можна відображати з ідентифікатором
## "what", оскільки Ren'Py використовує це для керування відображенням тексту.
## Він також може створювати відображувані елементи з ідентифікаторами "who" та
## ідентифікаторами "window" для застосування властивостей стилю.
##
## https://www.renpy.org/doc/html/screen_special.html#say

screen say(who, what):
    style_prefix "say"

    window:
        id "window"

        if who is not None:

            window:
                id "namebox"
                style "namebox"
                text who id "who"

        text what id "what"


    ## Якщо є зображення збоку, відобразіть його над текстом. Не відображати на
    ## телефоні як варіант - немає місця.
    if not renpy.variant("small"):
        add SideImage() xalign 0.0 yalign 1.0


## Робить поле імен доступним для стилізації через об'єкт Character.
init python:
    config.character_id_prefixes.append('namebox')

style window is default
style say_label is default
style say_dialogue is default
style say_thought is say_dialogue

style namebox is default
style namebox_label is say_label


style window:
    xalign 0.5
    xfill True
    yalign gui.textbox_yalign
    ysize gui.textbox_height

    background Image("gui/textbox.png", xalign=0.5, yalign=1.0)

style namebox:
    xpos gui.name_xpos
    xanchor gui.name_xalign
    xsize gui.namebox_width
    ypos gui.name_ypos
    ysize gui.namebox_height

    background Frame("gui/namebox.png", gui.namebox_borders, tile=gui.namebox_tile, xalign=gui.name_xalign)
    padding gui.namebox_borders.padding

style say_label:
    properties gui.text_properties("name", accent=True)
    xalign gui.name_xalign
    yalign 0.5

style say_dialogue:
    properties gui.text_properties("dialogue")

    xpos gui.dialogue_xpos
    xsize gui.dialogue_width
    ypos gui.dialogue_ypos

    adjust_spacing False

## Екран введення ##############################################################
##
## Цей екран використовується для відображення renpy.input. Параметр prompt
## використовується для передачі текстової підказки.
##
## Цей екран має створити відображуваний вхід з ідентифікатором "input" для
## прийняття різних вхідних параметрів.
##
## https://www.renpy.org/doc/html/screen_special.html#input

screen input(prompt):
    style_prefix "input"

    window:

        vbox:
            xanchor gui.dialogue_text_xalign
            xpos gui.dialogue_xpos
            xsize gui.dialogue_width
            ypos gui.dialogue_ypos

            text prompt style "input_prompt"
            input id "input"

style input_prompt is default

style input_prompt:
    xalign gui.dialogue_text_xalign
    properties gui.text_properties("input_prompt")

style input:
    xalign gui.dialogue_text_xalign
    xmaximum gui.dialogue_width


## Екран вибору ################################################################
##
## Цей екран використовується для відображення вибору в грі, представленого
## командою 'menu'. Один параметр, 'items', — це список об’єктів, кожен із
## полями заголовка та дії.
##
## https://www.renpy.org/doc/html/screen_special.html#choice

screen choice(items):
    style_prefix "choice"

    vbox:
        for i in items:
            textbutton i.caption action i.action


style choice_vbox is vbox
style choice_button is button
style choice_button_text is button_text

style choice_vbox:
    xalign 0.5
    ypos 405
    yanchor 0.5

    spacing gui.choice_spacing

style choice_button is default:
    properties gui.button_properties("choice_button")

style choice_button_text is default:
    properties gui.button_text_properties("choice_button")


## Екран швидкого меню #########################################################
##
## Швидке меню відображається в грі, щоб забезпечити легкий доступ до меню поза
## грою.

screen quick_menu():

    ## Переконайтеся, що це відображається поверх інших екранів.
    zorder 100

    if quick_menu:

        hbox:
            style_prefix "quick"

            xalign 0.5
            yalign 1.0

            textbutton _("Назад") action Rollback()
            textbutton _("Історія") action ShowMenu('history')
            textbutton _("Пропустити") action Skip() alternate Skip(fast=True, confirm=True)
            textbutton _("Авто") action Preference("auto-forward", "toggle")
            textbutton _("Зберегти") action ShowMenu('save')
            textbutton _("Ш.Зберегти") action QuickSave()
            textbutton _("Ш.Завантажити") action QuickLoad()
            textbutton _("Опції") action ShowMenu('preferences')


## Цей код гарантує, що екран quick_menu відображається в грі, якщо гравець явно
## не приховав інтерфейс.
init python:
    config.overlay_screens.append("quick_menu")

default quick_menu = True

style quick_button is default
style quick_button_text is button_text

style quick_button:
    properties gui.button_properties("quick_button")

style quick_button_text:
    properties gui.button_text_properties("quick_button")


################################################################################
## Екрани головного та ігрового меню
################################################################################

## Екран навігації #############################################################
##
## Цей екран включено в головне та ігрове меню та забезпечує навігацію до інших
## меню та початок гри.

screen navigation():

    vbox:
        style_prefix "navigation"

        xpos gui.navigation_xpos
        yalign 0.5

        spacing gui.navigation_spacing

        if main_menu:

            textbutton _("Почати") action Start()

        else:

            textbutton _("Історія") action ShowMenu("history")

            textbutton _("Зберегти") action ShowMenu("save")

        textbutton _("Завантажити") action ShowMenu("load")

        textbutton _("Галерея") action ShowMenu("gallery")

        textbutton _("Налаштування") action ShowMenu("preferences")

        if _in_replay:

            textbutton _("Кінець повтору") action EndReplay(confirm=True)

        elif not main_menu:

            textbutton _("Головне меню") action MainMenu()

        textbutton _("Про гру") action ShowMenu("about")

        if renpy.variant("pc") or (renpy.variant("web") and not renpy.variant("mobile")):

            ## Допомога не є необхідною або актуальною для мобільних пристроїв.
            textbutton _("Довідка") action ShowMenu("help")

        if renpy.variant("pc"):

            ## Кнопка виходу заборонена на iOS і непотрібна на Android і в Веб.
            textbutton _("Вийти") action Quit(confirm=not main_menu)


style navigation_button is gui_button
style navigation_button_text is gui_button_text

style navigation_button:
    size_group "navigation"
    properties gui.button_properties("navigation_button")

style navigation_button_text:
    properties gui.button_text_properties("navigation_button")



# Ініціалізація галереї (user init)
init python:
    page_num = 1  
    g = Gallery()
    g.locked_button = "images/posters/locked.png"
    for i in range(1, 31):
        # Заповнення кнопок
        end_name = f"end{i}"
        condition_name = f"persistent.end{i}"
        image_name = end_name
        # Оригінальні кнопки
        g.button(end_name)
        g.image(image_name)
        g.unlock(image_name)
        # g.button(end_name)
        # g.image(image_name)
        # g.condition(condition_name) 


# Екран галереї (user screen)
screen gallery():
    tag menu
    add "gui/game_menu.png"
    use navigation
    use game_menu("Галерея")
    hbox xalign 0.5 yalign 0.95:
        textbutton _("1   ") action SetScreenVariable("page_num", 1)
        textbutton _("2   ") action SetScreenVariable("page_num", 2)
        textbutton _("3   ") action SetScreenVariable("page_num", 3)
        textbutton _("4   ") action SetScreenVariable("page_num", 4)
    if page_num == 1:
        use gallery_first_page
    elif page_num == 2:
        use gallery_second_page
    elif page_num == 3:
        use gallery_third_page
    elif page_num == 4:
        use gallery_fourth_page

screen gallery_first_page():
    grid 3 3 left_margin 500 ymargin 150:
        xfill True
        yfill True
        add g.make_button("end1", "preview1", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end2", "preview2", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end3", "preview3", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end4", "preview4", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end5", "preview5", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end6", "preview6", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end7", "preview7", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end8", "preview8", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end9", "preview9", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")

screen gallery_second_page():
    grid 3 3 left_margin 500 ymargin 150:
        xfill True
        yfill True
        add g.make_button("end10", "preview10", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end11", "preview11", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end12", "preview12", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end13", "preview13", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end14", "preview14", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end15", "preview15", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end16", "preview16", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end17", "preview17", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end18", "preview18", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")

screen gallery_third_page():
    grid 3 3 left_margin 500 ymargin 150:
        xfill True
        yfill True
        add g.make_button("end19", "preview19", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end20", "preview20", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end21", "preview21", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end22", "preview22", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end23", "preview23", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end24", "preview24", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end25", "preview25", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end26", "preview26", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end27", "preview27", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")

screen gallery_fourth_page():
    grid 3 3 left_margin 500 ymargin 150:
        xfill True
        yfill True
        add g.make_button("end28", "preview28", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end29", "preview29", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        add g.make_button("end30", "preview30", xalign=0.1, yalign=0.3, hover_border="images/posters/hover_poster.png")
        null
        null
        null
        null
        null
        null

# Для екрану таймера (user screen helper)
transform alpha_dissolve:
    alpha 0.0
    linear 0.5 alpha 1.0
    on hide:
        linear 0.5 alpha 0

# Екран таймера (user screen)
screen countdown:
    timer 1 repeat True action If(time > 0, true=SetVariable('time', time - 1), false=[Hide('countdown'), Jump(timer_jump)])
    bar value time range timer_range xalign 0.5 yalign 0.2 xmaximum 300 at alpha_dissolve


## Екран головного меню ########################################################
##
## Використовується для відображення головного меню під час запуску Ren'Py.
##
## https://www.renpy.org/doc/html/screen_special.html#main-menu

screen main_menu():

    ## Це гарантує, що будь-який інший екран меню буде замінено.
    tag menu

    add gui.main_menu_background

    ## Ця порожня рамка затемнює головне меню.
    frame:
        style "main_menu_frame"

    ## Інструкція використання включає інший екран всередині цього. Фактичний
    ## вміст головного меню знаходиться на екрані навігації.
    use navigation

    if gui.show_name:

        vbox:
            style "main_menu_vbox"

            text "[config.name!t]":
                style "main_menu_title"

            text "[config.version]":
                style "main_menu_version"


style main_menu_frame is empty
style main_menu_vbox is vbox
style main_menu_text is gui_text
style main_menu_title is main_menu_text
style main_menu_version is main_menu_text

style main_menu_frame:
    xsize 420
    yfill True

    background "gui/overlay/main_menu.png"

style main_menu_vbox:
    xalign 1.0
    xoffset -30
    xmaximum 1200
    yalign 1.0
    yoffset -30

style main_menu_text:
    properties gui.text_properties("main_menu", accent=True)

style main_menu_title:
    properties gui.text_properties("title")

style main_menu_version:
    properties gui.text_properties("version")


## Екран меню гри ##############################################################
##
## Це описує базову структуру екрана меню гри. Він викликається за допомогою
## заголовка екрана та відображає фон, заголовок і навігацію.
##
## Параметр прокручування може бути None або одним із "viewport" чи "vpgrid".
## Коли цей екран призначений для використання з одним або декількома об'єктами,
## які включені (розміщені) всередині нього.

screen game_menu(title, scroll=None, yinitial=0.0):

    style_prefix "game_menu"

    if main_menu:
        add gui.main_menu_background
    else:
        add gui.game_menu_background

    frame:
        style "game_menu_outer_frame"

        hbox:

            ## Зарезервуйте місце для розділу навігації.
            frame:
                style "game_menu_navigation_frame"

            frame:
                style "game_menu_content_frame"

                if scroll == "viewport":

                    viewport:
                        yinitial yinitial
                        scrollbars "vertical"
                        mousewheel True
                        draggable True
                        pagekeys True

                        side_yfill True

                        vbox:
                            transclude

                elif scroll == "vpgrid":

                    vpgrid:
                        cols 1
                        yinitial yinitial

                        scrollbars "vertical"
                        mousewheel True
                        draggable True
                        pagekeys True

                        side_yfill True

                        transclude

                else:

                    transclude

    use navigation

    textbutton _("Повернутися"):
        style "return_button"

        action Return()

    label title

    if main_menu:
        key "game_menu" action ShowMenu("main_menu")


style game_menu_outer_frame is empty
style game_menu_navigation_frame is empty
style game_menu_content_frame is empty
style game_menu_viewport is gui_viewport
style game_menu_side is gui_side
style game_menu_scrollbar is gui_vscrollbar

style game_menu_label is gui_label
style game_menu_label_text is gui_label_text

style return_button is navigation_button
style return_button_text is navigation_button_text

style game_menu_outer_frame:
    bottom_padding 45
    top_padding 180

    background "gui/overlay/game_menu.png"

style game_menu_navigation_frame:
    xsize 420
    yfill True

style game_menu_content_frame:
    left_margin 60
    right_margin 30
    top_margin 15

style game_menu_viewport:
    xsize 1380

style game_menu_vscrollbar:
    unscrollable gui.unscrollable

style game_menu_side:
    spacing 15

style game_menu_label:
    xpos 75
    ysize 180

style game_menu_label_text:
    size gui.title_text_size
    color gui.accent_color
    yalign 0.5

style return_button:
    xpos gui.navigation_xpos
    yalign 1.0
    yoffset -45


## Про екран ###################################################################
##
## Цей екран містить інформацію про авторство та авторські права щодо гри та
## Ren'Py.
##
## У цьому екрані немає нічого особливого, тому він також служить прикладом
## того, як створити власний екран.

screen about():

    tag menu

    ## Цей оператор використання включає екран game_menu всередині цього. Потім
    ## дочірній елемент vbox включається в область перегляду всередині екрана
    ## game_menu.
    use game_menu(_("Про гру"), scroll="viewport"):

        style_prefix "about"

        vbox:

            label "[config.name!t]"
            text _("Версія [config.version!t]\n")

            ## gui.about зазвичай встановлюється в options.rpy.
            if gui.about:
                text "[gui.about!t]\n"

            text _("Створено за допомогою {a=https://www.renpy.org/}Ren'Py{/a} [renpy.version_only].\n\n[renpy.license!t]")


style about_label is gui_label
style about_label_text is gui_label_text
style about_text is gui_text

style about_label_text:
    size gui.label_text_size


## Екрани завантаження та збереження ###########################################
##
## Ці екрани дозволяють гравцеві зберегти гру та завантажити її знову. Оскільки
## вони мають майже все спільне, обидва реалізовані в термінах третього екрана,
## file_slots.
##
## https://www.renpy.org/doc/html/screen_special.html#save https://
## www.renpy.org/doc/html/screen_special.html#load

screen save():

    tag menu

    use file_slots(_("Зберегти"))


screen load():

    tag menu

    use file_slots(_("Завантажити"))


screen file_slots(title):

    default page_name_value = FilePageNameInputValue(pattern=_("Сторінка {}"), auto=_("Авто збереження"), quick=_("Швидкі збереження"))

    use game_menu(title):

        fixed:

            ## Це гарантує, що введення отримає подію enter раніше, ніж будь-яка
            ## кнопка.
            order_reverse True

            ## Назва сторінки, яку можна редагувати, натиснувши кнопку.
            button:
                style "page_label"

                key_events True
                xalign 0.5
                action page_name_value.Toggle()

                input:
                    style "page_label_text"
                    value page_name_value

            ## Сітка слотів для файлів.
            grid gui.file_slot_cols gui.file_slot_rows:
                style_prefix "slot"

                xalign 0.5
                yalign 0.5

                spacing gui.slot_spacing

                for i in range(gui.file_slot_cols * gui.file_slot_rows):

                    $ slot = i + 1

                    button:
                        action FileAction(slot)

                        has vbox

                        add FileScreenshot(slot) xalign 0.5

                        text FileTime(slot, format=_("{#file_time}%A, %B %d %Y, %H:%M"), empty=_("порожній слот")):
                            style "slot_time_text"

                        text FileSaveName(slot):
                            style "slot_name_text"

                        key "save_delete" action FileDelete(slot)

            ## Кнопки для доступу до інших сторінок.
            hbox:
                style_prefix "page"

                xalign 0.5
                yalign 1.0

                spacing gui.page_spacing

                textbutton _("<") action FilePagePrevious()

                if config.has_autosave:
                    textbutton _("{#auto_page}A") action FilePage("auto")

                if config.has_quicksave:
                    textbutton _("{#quick_page}Ш") action FilePage("quick")

                ## діапазон(1, 10) дає числа від 1 до 9.
                for page in range(1, 10):
                    textbutton "[page]" action FilePage(page)

                textbutton _(">") action FilePageNext()


style page_label is gui_label
style page_label_text is gui_label_text
style page_button is gui_button
style page_button_text is gui_button_text

style slot_button is gui_button
style slot_button_text is gui_button_text
style slot_time_text is slot_button_text
style slot_name_text is slot_button_text

style page_label:
    xpadding 75
    ypadding 5

style page_label_text:
    text_align 0.5
    layout "subtitle"
    hover_color gui.hover_color

style page_button:
    properties gui.button_properties("page_button")

style page_button_text:
    properties gui.button_text_properties("page_button")

style slot_button:
    properties gui.button_properties("slot_button")

style slot_button_text:
    properties gui.button_text_properties("slot_button")


## Екран налаштувань ###########################################################
##
## Екран налаштувань дозволяє гравцеві налаштувати гру на свій смак.
##
## https://www.renpy.org/doc/html/screen_special.html#preferences

screen preferences():

    tag menu

    use game_menu(_("Налаштування"), scroll="viewport"):

        vbox:

            hbox:
                box_wrap True

                if renpy.variant("pc") or renpy.variant("web"):

                    vbox:
                        style_prefix "radio"
                        label _("Дисплей")
                        textbutton _("Вікно") action Preference("display", "window")
                        textbutton _("На весь екран") action Preference("display", "fullscreen")

                vbox:
                    style_prefix "check"
                    label _("Пропустити")
                    textbutton _("Не бачений текст") action Preference("skip", "toggle")
                    textbutton _("Після виборів") action Preference("after choices", "toggle")
                    textbutton _("Переходи") action InvertSelected(Preference("transitions", "toggle"))

                ## Сюди можна долучити додаткові вікна vbox типу "radio_pref"
                ## або "check_pref", щоб долучити додаткові параметри, визначені
                ## творцем.

            null height (4 * gui.pref_spacing)

            hbox:
                style_prefix "slider"
                box_wrap True

                vbox:

                    label _("Швидкість тексту")

                    bar value Preference("text speed")

                    label _("Час авто-переадресації")

                    bar value Preference("auto-forward time")

                vbox:

                    if config.has_music:
                        label _("Гучність музики")

                        hbox:
                            bar value Preference("music volume")

                    if config.has_sound:

                        label _("Гучність звуку")

                        hbox:
                            bar value Preference("sound volume")

                            if config.sample_sound:
                                textbutton _("Тест") action Play("sound", config.sample_sound)


                    if config.has_voice:
                        label _("Гучність голосу")

                        hbox:
                            bar value Preference("voice volume")

                            if config.sample_voice:
                                textbutton _("Тест") action Play("voice", config.sample_voice)

                    if config.has_music or config.has_sound or config.has_voice:
                        null height gui.pref_spacing

                        textbutton _("Без звуку"):
                            action Preference("all mute", "toggle")
                            style "mute_all_button"


style pref_label is gui_label
style pref_label_text is gui_label_text
style pref_vbox is vbox

style radio_label is pref_label
style radio_label_text is pref_label_text
style radio_button is gui_button
style radio_button_text is gui_button_text
style radio_vbox is pref_vbox

style check_label is pref_label
style check_label_text is pref_label_text
style check_button is gui_button
style check_button_text is gui_button_text
style check_vbox is pref_vbox

style slider_label is pref_label
style slider_label_text is pref_label_text
style slider_slider is gui_slider
style slider_button is gui_button
style slider_button_text is gui_button_text
style slider_pref_vbox is pref_vbox

style mute_all_button is check_button
style mute_all_button_text is check_button_text

style pref_label:
    top_margin gui.pref_spacing
    bottom_margin 3

style pref_label_text:
    yalign 1.0

style pref_vbox:
    xsize 338

style radio_vbox:
    spacing gui.pref_button_spacing

style radio_button:
    properties gui.button_properties("radio_button")
    foreground "gui/button/radio_[prefix_]foreground.png"

style radio_button_text:
    properties gui.button_text_properties("radio_button")

style check_vbox:
    spacing gui.pref_button_spacing

style check_button:
    properties gui.button_properties("check_button")
    foreground "gui/button/check_[prefix_]foreground.png"

style check_button_text:
    properties gui.button_text_properties("check_button")

style slider_slider:
    xsize 525

style slider_button:
    properties gui.button_properties("slider_button")
    yalign 0.5
    left_margin 15

style slider_button_text:
    properties gui.button_text_properties("slider_button")

style slider_vbox:
    xsize 675


## Екран історії ###############################################################
##
## Це екран, на якому гравцеві відображається історія діалогів. Хоча в цьому
## екрані немає нічого особливого, він має доступ до історії діалогів, що
## зберігається в _history_list.
##
## https://www.renpy.org/doc/html/history.html

screen history():

    tag menu

    ## Уникайте прогнозування цього екрана, оскільки він може бути дуже великим.
    predict False

    use game_menu(_("Історія"), scroll=("vpgrid" if gui.history_height else "viewport"), yinitial=1.0):

        style_prefix "history"

        for h in _history_list:

            window:

                ## Це правильно розкладає речі, якщо history_height дорівнює
                ## None.
                has fixed:
                    yfit True

                if h.who:

                    label h.who:
                        style "history_name"
                        substitute False

                        ## Взяти колір тексту що від персонажа, якщо
                        ## встановлено.
                        if "color" in h.who_args:
                            text_color h.who_args["color"]

                $ what = renpy.filter_text_tags(h.what, allow=gui.history_allow_tags)
                text what:
                    substitute False

        if not _history_list:
            label _("Історія діалогу порожня.")


## Це визначає теги, які можна відображати на екрані історії.

define gui.history_allow_tags = { "alt", "noalt", "rt", "rb", "art" }


style history_window is empty

style history_name is gui_label
style history_name_text is gui_label_text
style history_text is gui_text

style history_label is gui_label
style history_label_text is gui_label_text

style history_window:
    xfill True
    ysize gui.history_height

style history_name:
    xpos gui.history_name_xpos
    xanchor gui.history_name_xalign
    ypos gui.history_name_ypos
    xsize gui.history_name_width

style history_name_text:
    min_width gui.history_name_width
    text_align gui.history_name_xalign

style history_text:
    xpos gui.history_text_xpos
    ypos gui.history_text_ypos
    xanchor gui.history_text_xalign
    xsize gui.history_text_width
    min_width gui.history_text_width
    text_align gui.history_text_xalign
    layout ("subtitle" if gui.history_text_xalign else "tex")

style history_label:
    xfill True

style history_label_text:
    xalign 0.5


## Екран довідки ###############################################################
##
## Екран, що надає інформацію про прив’язку клавіш і миші. Він використовує інші
## екрани (keyboard_help, mouse_help і gamepad_help), щоб відобразити фактичну
## довідку.

screen help():

    tag menu

    default device = "keyboard"

    use game_menu(_("Довідка"), scroll="viewport"):

        style_prefix "help"

        vbox:
            spacing 23

            hbox:

                textbutton _("Клавіатура") action SetScreenVariable("device", "keyboard")
                textbutton _("Мишка") action SetScreenVariable("device", "mouse")

                if GamepadExists():
                    textbutton _("Геймпад") action SetScreenVariable("device", "gamepad")

            if device == "keyboard":
                use keyboard_help
            elif device == "mouse":
                use mouse_help
            elif device == "gamepad":
                use gamepad_help


screen keyboard_help():

    hbox:
        label _("Enter")
        text _("Розвиває діалог і активує інтерфейс.")

    hbox:
        label _("Space")
        text _("Просуває діалог без вибору варіантів.")

    hbox:
        label _("Клавіші cтрілок")
        text _("Навігація по інтерфейсу.")

    hbox:
        label _("Escape")
        text _("Доступ до меню гри.")

    hbox:
        label _("Ctrl")
        text _("Пропускає діалог при утриманні.")

    hbox:
        label _("Tab")
        text _("Вмикає пропуск діалогу.")

    hbox:
        label _("Page Up")
        text _("Відкат до попереднього діалогу.")

    hbox:
        label _("Page Down")
        text _("Перехід до наступного діалогу.")

    hbox:
        label "H"
        text _("Приховує інтерфейс користувача.")

    hbox:
        label "S"
        text _("Робить скріншот.")

    hbox:
        label "V"
        text _("Вмикає допоміжне {a=https://www.renpy.org/l/voicing}самоозвучення{/a}.")

    hbox:
        label "Shift+A"
        text _("Відкриває меню спеціальних можливостей.")


screen mouse_help():

    hbox:
        label _("Лівий клік")
        text _("Розвиває діалог і активує інтерфейс.")

    hbox:
        label _("Середній клік")
        text _("Приховує інтерфейс користувача.")

    hbox:
        label _("Правий клік")
        text _("Доступ до меню гри.")

    hbox:
        label _("Колесо миші вгору\nбік повернення назад")
        text _("Відкат до попереднього діалогу.")

    hbox:
        label _("Колесо миші вниз")
        text _("Перехід до наступного діалогу.")


screen gamepad_help():

    hbox:
        label _("Правий тригер\nA/нижня кнопка")
        text _("Розвиває діалог і активує інтерфейс.")

    hbox:
        label _("Лівий тригер\nЛіве плече")
        text _("Відкат до попереднього діалогу.")

    hbox:
        label _("Праве плече")
        text _("Перехід до наступного діалогу.")


    hbox:
        label _("D-Pad, стіки")
        text _("Навігація по інтерфейсу.")

    hbox:
        label _("Старт, Гайд")
        text _("Доступ до меню гри.")

    hbox:
        label _("Кнопка Y/Top")
        text _("Приховує інтерфейс користувача.")

    textbutton _("Калібрувати") action GamepadCalibrate()


style help_button is gui_button
style help_button_text is gui_button_text
style help_label is gui_label
style help_label_text is gui_label_text
style help_text is gui_text

style help_button:
    properties gui.button_properties("help_button")
    xmargin 12

style help_button_text:
    properties gui.button_text_properties("help_button")

style help_label:
    xsize 375
    right_padding 30

style help_label_text:
    size gui.text_size
    xalign 1.0
    text_align 1.0



################################################################################
## Додаткові екрани
################################################################################


## Екран підтвердження #########################################################
##
## Екран підтвердження викликається, коли Ren'Py хоче поставити гравцеві
## запитання «так» або «ні».
##
## https://www.renpy.org/doc/html/screen_special.html#confirm

screen confirm(message, yes_action, no_action):

    ## Переконайтеся, що інші екрани не отримують введення, поки відображається
    ## цей екран.
    modal True

    zorder 200

    style_prefix "confirm"

    add "gui/overlay/confirm.png"

    frame:

        vbox:
            xalign .5
            yalign .5
            spacing 45

            label _(message):
                style "confirm_prompt"
                xalign 0.5

            hbox:
                xalign 0.5
                spacing 150

                textbutton _("Так") action yes_action
                textbutton _("Ні") action no_action

    ## Клацніть правою кнопкою миші та вийдіть із відповіді "no".
    key "game_menu" action no_action


style confirm_frame is gui_frame
style confirm_prompt is gui_prompt
style confirm_prompt_text is gui_prompt_text
style confirm_button is gui_medium_button
style confirm_button_text is gui_medium_button_text

style confirm_frame:
    background Frame([ "gui/confirm_frame.png", "gui/frame.png"], gui.confirm_frame_borders, tile=gui.frame_tile)
    padding gui.confirm_frame_borders.padding
    xalign .5
    yalign .5

style confirm_prompt_text:
    text_align 0.5
    layout "subtitle"

style confirm_button:
    properties gui.button_properties("confirm_button")

style confirm_button_text:
    properties gui.button_text_properties("confirm_button")


## Екран індикатора пропуску ###################################################
##
## Екран skip_indicator відображається, щоб вказати, що триває пропуск.
##
## https://www.renpy.org/doc/html/screen_special.html#skip-indicator

screen skip_indicator():

    zorder 100
    style_prefix "skip"

    frame:

        hbox:
            spacing 9

            text _("Пропуск")

            text "▸" at delayed_blink(0.0, 1.0) style "skip_triangle"
            text "▸" at delayed_blink(0.2, 1.0) style "skip_triangle"
            text "▸" at delayed_blink(0.4, 1.0) style "skip_triangle"


## Це перетворення використовується для миготіння стрілок одна за одною.
transform delayed_blink(delay, cycle):
    alpha .5

    pause delay

    block:
        linear .2 alpha 1.0
        pause .2
        linear .2 alpha 0.5
        pause (cycle - .4)
        repeat


style skip_frame is empty
style skip_text is gui_text
style skip_triangle is skip_text

style skip_frame:
    ypos gui.skip_ypos
    background Frame("gui/skip.png", gui.skip_frame_borders, tile=gui.frame_tile)
    padding gui.skip_frame_borders.padding

style skip_text:
    size gui.notify_text_size

style skip_triangle:
    ## Ми повинні використовувати шрифт із гліфом МАЛЕНЬКИЙ ЧОРНИЙ ТРИКУТНИК
    ## ВПРАВО.
    font "DejaVuSans.ttf"


## Екран сповіщень #############################################################
##
## Екран сповіщень використовується, щоб показати гравцеві повідомлення.
## (Наприклад, коли гра швидко збережена або зроблено знімок екрана.)
##
## https://www.renpy.org/doc/html/screen_special.html#notify-screen

screen notify(message):

    zorder 100
    style_prefix "notify"

    frame at notify_appear:
        text "[message!tq]"

    timer 3.25 action Hide('notify')


transform notify_appear:
    on show:
        alpha 0
        linear .25 alpha 1.0
    on hide:
        linear .5 alpha 0.0


style notify_frame is empty
style notify_text is gui_text

style notify_frame:
    ypos gui.notify_ypos

    background Frame("gui/notify.png", gui.notify_frame_borders, tile=gui.frame_tile)
    padding gui.notify_frame_borders.padding

style notify_text:
    properties gui.text_properties("notify")


## Екран NVL ###################################################################
##
## Відображає діалог у vpgrid або vbox.
##
## https://www.renpy.org/doc/html/screen_special.html#nvl


screen nvl(dialogue, items=None):

    window:
        style "nvl_window"

        has vbox:
            spacing gui.nvl_spacing

        ## Відображає діалог у vpgrid або vbox.
        if gui.nvl_height:

            vpgrid:
                cols 1
                yinitial 1.0

                use nvl_dialogue(dialogue)

        else:

            use nvl_dialogue(dialogue)

        ## Відображає меню, якщо є. Меню може відображатися неправильно, якщо
        ## для config.narrator_menu встановлено значення True.
        for i in items:

            textbutton i.caption:
                action i.action
                style "nvl_button"

    add SideImage() xalign 0.0 yalign 1.0


screen nvl_dialogue(dialogue):

    for d in dialogue:

        window:
            id d.window_id

            fixed:
                yfit gui.nvl_height is None

                if d.who is not None:

                    text d.who:
                        id d.who_id

                text d.what:
                    id d.what_id


## Це визначає максимальну кількість записів у режимі NVL, які можуть бути
## відображені одночасно.
define config.nvl_list_length = gui.nvl_list_length

style nvl_window is default
style nvl_entry is default

style nvl_label is say_label
style nvl_dialogue is say_dialogue

style nvl_button is button
style nvl_button_text is button_text

style nvl_window:
    xfill True
    yfill True

    background "gui/nvl.png"
    padding gui.nvl_borders.padding

style nvl_entry:
    xfill True
    ysize gui.nvl_height

style nvl_label:
    xpos gui.nvl_name_xpos
    xanchor gui.nvl_name_xalign
    ypos gui.nvl_name_ypos
    yanchor 0.0
    xsize gui.nvl_name_width
    min_width gui.nvl_name_width
    text_align gui.nvl_name_xalign

style nvl_dialogue:
    xpos gui.nvl_text_xpos
    xanchor gui.nvl_text_xalign
    ypos gui.nvl_text_ypos
    xsize gui.nvl_text_width
    min_width gui.nvl_text_width
    text_align gui.nvl_text_xalign
    layout ("subtitle" if gui.nvl_text_xalign else "tex")

style nvl_thought:
    xpos gui.nvl_thought_xpos
    xanchor gui.nvl_thought_xalign
    ypos gui.nvl_thought_ypos
    xsize gui.nvl_thought_width
    min_width gui.nvl_thought_width
    text_align gui.nvl_thought_xalign
    layout ("subtitle" if gui.nvl_text_xalign else "tex")

style nvl_button:
    properties gui.button_properties("nvl_button")
    xpos gui.nvl_button_xpos
    xanchor gui.nvl_button_xalign

style nvl_button_text:
    properties gui.button_text_properties("nvl_button")



################################################################################
## Мобільні варіанти
################################################################################

style pref_vbox:
    variant "medium"
    xsize 675

## Оскільки миша може бути відсутня, ми замінюємо швидке меню версією, яка
## використовує менше та більші кнопки, які легше торкатися.
screen quick_menu():
    variant "touch"

    zorder 100

    if quick_menu:

        hbox:
            style_prefix "quick"

            xalign 0.5
            yalign 1.0

            textbutton _("Назад") action Rollback()
            textbutton _("Пропустити") action Skip() alternate Skip(fast=True, confirm=True)
            textbutton _("Авто") action Preference("auto-forward", "toggle")
            textbutton _("Меню") action ShowMenu()


style window:
    variant "small"
    background "gui/phone/textbox.png"

style radio_button:
    variant "small"
    foreground "gui/phone/button/radio_[prefix_]foreground.png"

style check_button:
    variant "small"
    foreground "gui/phone/button/check_[prefix_]foreground.png"

style nvl_window:
    variant "small"
    background "gui/phone/nvl.png"

style main_menu_frame:
    variant "small"
    background "gui/phone/overlay/main_menu.png"

style game_menu_outer_frame:
    variant "small"
    background "gui/phone/overlay/game_menu.png"

style game_menu_navigation_frame:
    variant "small"
    xsize 510

style game_menu_content_frame:
    variant "small"
    top_margin 0

style pref_vbox:
    variant "small"
    xsize 600

style bar:
    variant "small"
    ysize gui.bar_size
    left_bar Frame("gui/phone/bar/left.png", gui.bar_borders, tile=gui.bar_tile)
    right_bar Frame("gui/phone/bar/right.png", gui.bar_borders, tile=gui.bar_tile)

style vbar:
    variant "small"
    xsize gui.bar_size
    top_bar Frame("gui/phone/bar/top.png", gui.vbar_borders, tile=gui.bar_tile)
    bottom_bar Frame("gui/phone/bar/bottom.png", gui.vbar_borders, tile=gui.bar_tile)

style scrollbar:
    variant "small"
    ysize gui.scrollbar_size
    base_bar Frame("gui/phone/scrollbar/horizontal_[prefix_]bar.png", gui.scrollbar_borders, tile=gui.scrollbar_tile)
    thumb Frame("gui/phone/scrollbar/horizontal_[prefix_]thumb.png", gui.scrollbar_borders, tile=gui.scrollbar_tile)

style vscrollbar:
    variant "small"
    xsize gui.scrollbar_size
    base_bar Frame("gui/phone/scrollbar/vertical_[prefix_]bar.png", gui.vscrollbar_borders, tile=gui.scrollbar_tile)
    thumb Frame("gui/phone/scrollbar/vertical_[prefix_]thumb.png", gui.vscrollbar_borders, tile=gui.scrollbar_tile)

style slider:
    variant "small"
    ysize gui.slider_size
    base_bar Frame("gui/phone/slider/horizontal_[prefix_]bar.png", gui.slider_borders, tile=gui.slider_tile)
    thumb "gui/phone/slider/horizontal_[prefix_]thumb.png"

style vslider:
    variant "small"
    xsize gui.slider_size
    base_bar Frame("gui/phone/slider/vertical_[prefix_]bar.png", gui.vslider_borders, tile=gui.slider_tile)
    thumb "gui/phone/slider/vertical_[prefix_]thumb.png"

style slider_vbox:
    variant "small"
    xsize None

style slider_slider:
    variant "small"
    xsize 900