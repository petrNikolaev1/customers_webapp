import constants from "@/constants";

export default {

    OrderList: {
        ID: '№',
        FROM: 'Котак бас',
        TO: 'Жеткізу орны',
        STATUS: 'Күйі',
        BIRTH_DATE: 'Өтініш күні',
        REFRESH: 'Жаңарту',
        EMPTY: 'Мұндай тапсырыстар жоқ',
        ERROR: 'Тапсырыстар тізімін алу кезінде қате пайда болды'
    },

    OrderItem: {
        ID: 'id',
        FROM: 'Ұшу щещес',
        TO: 'Жеткізу орны',
        STATUS: 'Күйі',
        FULL_TO: 'Толық котак жеме',
        FUll_FROM: 'Жеткізу мекен-жайы',
        WEIGHT: 'Салмақ',
        WORTH: 'Құны',
        DESCRIPTION: 'Сипаттама',
        PHONE_NUM: 'Телефон нөмірі',
        DUE_DATE: 'Жеткізу',
        BIRTH_DATE: 'Қолданба сыгын',
        APPROVE: 'Қабылдау',
        REJECT: 'Қабылдамау',
        ORDER_MODAL_TITLE: 'Ақпаратқа тапсырыс беру',
        [constants.PENDING_CONFIRMATION]: 'Растауды күту',
        [constants.IN_PROGRESS]: 'Жеткізіледі',
        [constants.DELIVERED]: 'Жеткізілді',
        [constants.REJECTED]: 'Қабылданбады',
        TRACK_ORDER: 'Track order'
    },

    Login: {
        LOGIN: 'Кіру',
        PASSWORD: 'Құпия сөз',
        ENTER: 'Жүйеге кіріңіз',
        INVALID: 'Жарамсыз логин / пароль',
        NOT_ALL_FIELDS: 'Барлық өрістерді толтырыңыз',
        SIGN_UP: 'Жасау',
        NOT_REGISTERED: 'IDC тіркелгісі әлі жоқ па?'
    },

    InfoPanel: {
        SELECT_NO_LANG: 'Мұндай тіл жоқ',
        SELECT_LANG_PLACEHOLDER: 'Интерфейс тілі таңдаңыз'
    },

    SelectDriver: {
        id: 'id',
        fullFrom: 'Мекен-жайы',
        fullTo: 'Алушының мекен-жайы',
        status: 'Күйі',
        weight: 'Бөліктің салмағы',
        worth: 'Жүк тасымалдау құны',
        description: 'Сипаттама',
        birthDate: 'Өтінім жасау күні',
        title: 'Ақпаратқа тапсырыс беру',
        approve: 'Қабылдау үшін',
        reject: 'Қабылдамау',
        choose_placeholder: 'Драйверлерді таңдаңыз',
        SELECT_NO_DRIVERS: 'Жүргізуші жоқ'
    },

    Pagination: {
        first: 'Басы',
        previous: 'Жоғарғы',
        next: 'Келесі',
        last: 'Cоңғы'
    },

    SelectRoute: {
        distance: 'Қашықтық',
        time: 'Уақыт',
        approve: 'Қабылдау',
        cancel: 'Болдырмау',
    },

    Success: {
        CREATE_ORDER_SUCCESS: 'Тапсырыс сәтті шығарылды!',
        REGISTER_CUSTOMER_SUCCESS: 'Тіркеу сәтті болды'
    },

    Error: {
        CREATE_ORDER_ERROR: 'Тапсырыс сәтсіз аяқталды. Желілік мәселелер болуы мүмкін.',
        REGISTER_CUSTOMER_ERROR: 'Тіркелу кезінде қате пайда болды. Желілік мәселелер болуы мүмкін.'
    },

    Settings: {
        SETTINGS: 'Параметрлер',
        BACK: 'Негізгі мәзірге оралу',
        ADMIN_PANEL: 'Басқару тақтасы',
        SELECT_NUMBER: 'Драйверлер санын таңдаңыз',
        PERSONAL_INFO: 'Жеке ақпарат',
        FULL_NAME: 'Толық аты',
        LICENSE_NUMBER: 'Лицензия нөмірі',
        POSITION: 'Жағдайы',
        ACCESS_LEVEL: 'Кіру деңгейі',
        LOGOUT: 'Шығу'
    },

    OrdersFilters: {
        [constants.PENDING_CONFIRMATION]: 'Растауды күту',
        [constants.IN_PROGRESS]: 'Жеткізіледі',
        [constants.DELIVERED]: 'Жеткізілді',
        [constants.REJECTED]: 'Қабылданбады'
    },

    CreateOrder: {
        CREATE_ORDER: 'Тапсырыс жасау',
        DESCRIPTION: 'Сипаттама',
        VALUE: 'Мәні (USD)',
        WEIGHT: 'Салмақ (kg)',
        FROM: 'Ұшу щещес',
        TO: 'Жеткізу орны',
        DATE: 'Жеткізілім уақыты',
        WRONG_DESCRIPTION: 'Жарамсыз сипаттамасы',
        WRONG_VALUE: 'Жарамсыз мән',
        WRONG_WEIGHT: 'Жарамсыз салмақ',
        WRONG_FROM: 'Нақты мекенжайды таңдаңыз',
        WRONG_TO: 'Нақты мекенжайды таңдаңыз',
        WRONG_DATE: 'Жарамды күні енгізіңіз \n Ең аз жеткізу мерзімі - 4 сағат',
        TIME: 'Жеткізілім мерзімі',
        INFO: 'Негізгі ақпарат',
        FORM_ORDER: 'Тапсырыс орналастырыңыз',
        FORMING: 'Өңдеу тәртібі'
    },

    CustomerRegistration:{
        REGISTRATION: 'Тіркеу',
        NAME: 'Атауы',
        NAME_NOTIFICATION: 'Атыңызды енгізіңіз',
        EMAIL: 'E-mail',
        EMAIL_NOTIFICATION: 'Жарамсыз электрондық пошта пішімі',
        PASSWORD: 'Құпия сөз',
        PASSWORD_NOTIFICATION: 'Парольдің ең аз ұзындығы -\n 6 таңба',
        REGISTER: 'Аккаунты жасау'
    }

};
