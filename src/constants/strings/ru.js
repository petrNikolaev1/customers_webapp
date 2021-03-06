import constants from "@/constants";

export default {

    OrderList: {
        ID: '№',
        FROM: 'Место отправления',
        TO: 'Место доставки',
        STATUS: 'Статус',
        BIRTH_DATE: 'Дата заявки',
        REFRESH: 'Обновить',
        EMPTY: 'Нет таких заказов',
        ERROR: 'Возникла ошибка при получении списка заказов',
    },

    OrderItem: {
        ID: 'Номер',
        FROM: 'Место отправления',
        TO: 'Место доставки',
        STATUS: 'Статус',
        FUll_FROM: 'Адрес отправки',
        FUll_TO: 'Адрес доставки',
        WEIGHT: 'Вес',
        WORTH: 'Стоимость',
        DESCRIPTION: 'Описание',
        PHONE_NUM: 'Номер телефона',
        DUE_DATE: 'Срок выполнения заявки',
        BIRTH_DATE: 'Дата заявки',
        APPROVE: 'Принять',
        REJECT: 'Отклонить',
        ORDER_MODAL_TITLE: 'Информация о заказе',
        [constants.PENDING_CONFIRMATION]: 'Ожидает подтверждения',
        [constants.IN_PROGRESS]: 'Доставляется',
        [constants.DELIVERED]: 'Доставлен',
        [constants.REJECTED]: 'Отклонен',
        TRACK_ORDER: 'Отследить заказ'
    },

    Login: {
        LOGIN: 'Логин',
        PASSWORD: 'Пароль',
        ENTER: 'Войти',
        INVALID: 'Неправильный логин/пароль',
        NOT_ALL_FIELDS: 'Пожалуйста, заполните все поля',
        SIGN_UP: 'Создать',
        NOT_REGISTERED: 'Ещё нет аккаунта IDC?'
    },

    InfoPanel: {
        SELECT_NO_LANG: 'Такого языка нет',
        SELECT_LANG_PLACEHOLDER: 'Выберите язык интерфейса'
    },

    SelectDriver: {
        id: 'id',
        fullFrom: 'Адрес отправления',
        fullTo: 'Адрес получателя',
        status: 'Статус',
        weight: 'Вес посылки',
        worth: 'Стоимость посылки',
        description: 'Описание',
        birthDate: 'Дата создания заявки',
        title: 'Информация о водителях',
        approve: 'Выбрать',
        reject: 'Назад',
        choose_placeholder: 'Выберите водителей',
        SELECT_NO_DRIVERS: 'Таких водителей нет'
    },

    Pagination: {
        first: 'Начало',
        previous: 'Назад',
        next: 'Вперед',
        last: 'Конец'
    },

    SelectRoute: {
        distance: 'Дистанция',
        time: 'Время',
        approve: 'Выбрать',
        cancel: 'Назад'
    },

    Success: {
        CREATE_ORDER_SUCCESS: 'Заказ успешно оформлен!',
        REGISTER_CUSTOMER_SUCCESS: 'Регистрация прошла успешно'
    },

    Error: {
        CREATE_ORDER_ERROR: 'Не удалось оформить заказ. Возможны проблемы с сетью',
        REGISTER_CUSTOMER_ERROR: 'Во время регистрации произошла ошибка. Возможны проблемы с сетью'
    },

    Settings: {
        SETTINGS: 'Настройки',
        BACK: 'Вернуться в главное меню',
        ADMIN_PANEL: 'Панель администрирации',
        SELECT_NUMBER: 'Выберите число водителей',
        PERSONAL_INFO: 'Персональная информация',
        FULL_NAME: 'ФИО',
        LICENSE_NUMBER: 'Номер лицензии',
        POSITION: 'Должность',
        ACCESS_LEVEL: 'Уровень доступа',
        LOGOUT: 'Выйти'
    },

    OrdersFilters: {
        [constants.PENDING_CONFIRMATION]: 'Ожидает подтверждения',
        [constants.IN_PROGRESS]: 'Доставляется',
        [constants.DELIVERED]: 'Доставлен',
        [constants.REJECTED]: 'Отклонен',
    },

    CreateOrder: {
        CREATE_ORDER: 'Создать заказ',
        DESCRIPTION: 'Описание',
        VALUE: 'Ценность (USD)',
        WEIGHT: 'Вес (кг)',
        FROM: 'Адрес отправления заказа',
        TO: 'Адрес доставки заказа',
        DATE: 'Дата доставки заказа',
        WRONG_DESCRIPTION: 'Неверно указано описание',
        WRONG_VALUE: 'Неверно указана стоимость',
        WRONG_WEIGHT: 'Неверно указан вес',
        WRONG_FROM: 'Пожалуйста, выберите точный адрес',
        WRONG_TO: 'Пожалуйста, выберите точный адрес',
        WRONG_DATE: 'Пожалуйста, укажите корректную дату.\nМинимальный срок выполнения заказа - 4 часа',
        TIME: 'Срок доставки заказа',
        INFO: 'Основная информация',
        FORM_ORDER: 'Оформить заказ',
        FORMING: 'Оформление заказа'
    },

    CustomerRegistration:{
        REGISTRATION: 'Регистрация',
        NAME: 'Имя',
        NAME_NOTIFICATION: 'Пожалуйста, укажите имя',
        EMAIL: 'E-mail',
        EMAIL_NOTIFICATION: 'Неверный формат e-mail',
        PASSWORD: 'Пароль',
        PASSWORD_NOTIFICATION: 'Минимальная длина пароля -\n 6 символов',
        REGISTER: 'Зарегистрироваться'
    }
};
