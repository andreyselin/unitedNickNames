import { IDictionary } from "../models";

const male = [
    'садист',
    'мазохист',
    'педант',
    'клерк',
    'грешник',
    'крепкий хозяйственник',
    'страстный читатель',
    'исполнитель',
    'азиат',
    'европеец',
    'островитянин',
    'конезаводчик',
    'веган',
    'альбатрос',
    'продавец редкостей',
    'любитель женщин постарше',
    'сисадмин',
    'историограф',
    'хоккеист с мячом',
    'наркодилер',
    'дальнобойщик',
    'физик-ядерщик',
    'земледелец',
    'погонщик травоядных драконов',
    'прапорщик',
    'интеллигент',
    'молодой человек',
    'популист',
    'горожанин',
    'товарищ',
    'владелец фабрики',
    'сторонник левых',
    'доктор наук',
    'вице-президент',
    'либерал-демократ',
    'добряк',
    'рубаха-парень',
    'широкой души человек',
    'ученый',
    'кафкианец',
    'патриот',
    'кремлебот',
    'профессионал',
    'знакомый знакомых',
    'участковый',
    'полковник',
    'рептилоид',
    'масон',
    'казалось бы, простачок',
    'любимец женщин',
    'испанец',
    'художник и поэт',
    'беглый олигарх',
    'мужчина',
    'прохожий',
    'случайный встречный',
    'пешеход',
    'сосед по очереди',
    'сторонник теории заговора',
    'любитель бани',
    'танцевальщик',
    'нигилист',
    'философ',
    'джеггернаут',
    'дядя',
    'гомофоб',
    'архиепископ',
    'известный монгольский рэппер',
    'коллекционер монет',
    'затворник',
    'блондин',
    'шатен',
    'незнакомец',
    'завсегдатай баров',
    'тусовщик',
    'госсулужащий',
    'изобретатель',
    'орнитолог',
    'игрок в покер',
    'отставной матрос',
    'сомалийский пират',
    'трейдер',
    'бас-гитарист',
    'заводила',
    'фетишист',
    'гопник',
    'последователь древнего культа',
    'минималист',
    'продавец папирос',
    'охотник за сокровищами',
    'борец за права угнетенных',
    'смотритель маяка',
    'цыганский барон',
    'вождь краснокожих',
    'пациент кащенко',
    'простачек',
    'таксист',
    'CEO',
    'кофаундер',
    'извращенец',
    'библиотекарь',
    'простофиля',
    'змеелов',
    'велосипедист',
    'скалолаз',
    'астронавт',
    'активист',
    'правозащитник',
    'бариста',
    'перфекционист',
    'военный',
    'феминист',
    'блогер',
    'нацист',
    'трансвестит',
    'альфонс',
    'водитель трамвая',
    'молодой моряк',
    'заказчик',
    'оптимист',
    'краснодеревщик',
    'деградант',
    'женоненавистник',
    'трансгендер',
    'неандерталец',
    'асексуал',
    'бисескуал',
    'MC',
    'биолог',
    'актер',
    'режиссер',
    'массажист',
    'директор',
    'менеджер среднего звена',
    'бедуин',
    'наездник',
    'киллер',
    'беспризорник',
    'рыцарь',
    'герцог',
    'садовник',
    'хоббит',
    'виолончелист',
    'муж журналистки',
    'барбер',
    'уборщик',
    'ассенизатор',
    'шахтер',
    'пародист',
    'мудрец',
    'артист комедийного жанра',
    'пловец баттерфляем',
    'пловец брассом',
    'скрипач',
    'трубач',
    'капиталист',
    'венчурный капиталист',
    'игрок на понижение',
    'пилот',
    'писатель-фантаст',
    'гомодрил',
    'гуманоид',
    'фуражер',
    'патрульный',
    'филателист',
    'повар',
    'сомелье',
    'флибустьер',
    'депутат',
    'единорос',
    'славянофил',
    'западник',
    'булочник',
    'омоновец',
    'сантехник',
    'сержант',
    'солдат-срочник',
    'собиратель',
    'повар Путина',
    'ресторатор',
    'медбрат',
    'искатель',
    'шахматист',
    'рыбак',
    'ПТУшник',
    'скульптор',
    'почвенник',
    'сенатор',
    'генетик',
    'курьер',
    'школьник',
    'фаворит',
    'студент',
    'юноша',
    'лыжник',
    'борцуха',
    'дамский угодник',
    'знаток разных видов насекомых',
    'шансонье',
    'человек-паук',
    'человек-летучая мышь',
    'аналитик',
    'диванный аналитик',
    'поп',
    'блэкстар',
    'скорострел',
    'Хранитель Ключа',
    'поставщик Кремля',
    'руководитель заксобрания',
    'русофоб',
    'модник',
    'енот',
    'силовик',
    'милитарист',
    'пацифист',
    'австралопитек',
    'центрист',
    'крайне правый',
    'крайне левый',
    'любимый руководитель',
    'читер',
    'архиерей',
    'Будулай',
    'Мелькиадес',
    'пловец',
    'индеец',
    'призрак коммунизма',
    'вольный копейщик',
    'продавец шаурмы',
    'телеведущий',
    'таможенник',
    'мздоимец',
    'начальник транспортного цеха',
    'парниша',
    'прокурор',
    'адвокат',
    'пацан',
    'долгоносик',
    'толстолобик',
    "контрабандист",
    "шаман",
    "из бетона обелиск",
    "ловелас",
    "естествоиспытатель",
    "интервьюер",
    "иностранный агент",
    "лодочник",
    "запевала",
    "архитектор малых форм",
    "самец",
    "фигурант",
    "анестезиолог",
    "баклан",
    "теоретик",
    "практик",
    "аспирант",
    "сторонник традиционных ценностей",
    "ВрИО президента",
    "предприниматель",
    "единоличник",
    "пушкинист",
    "гусар",
    "дядя Ваня",
    "бурят",
    "денди лондонский",
    "коллаборационист",
    "директор по продукту",
    "стилист",
    "ментор",
    "стартапер",
    "видеоблоггер",
    "блоггер",
    "скрепоносец",
    "политолог",
    "идеолог",
    "евангелист",
    "огородник",
    "иезуит",
    "плюралист",
    "поклонник",
    "конкурент",
    "наблюдатель",
    "монголо-татарин",
    "идолопоклонник",
    "дед",
    "республиканец",
    "реформист",
    "догматик",
    "делопроизводитель",
    "иммигрант",
    "член-корреспондент",
    "легкоатлет",
    "ихтиолог",
    "археолог",
    "полярник",
    "гомеопат",
    "собиратель земель Русских",
    "советник",
    "диктатор",
    "муниципальный депутат",
    "великомученник",
];

const female = [
    "незнакомка",
    "садистка",
    "мазохистка",
    "педантка",
    "креолка",
    "грешница",
    "колхозница",
    "страстная читателька",
    "исполнителька",
    "азиатка",
    "европейка",
    "островитянка",
    "конезаводчица",
    "веганка",
    "альбатроска",
    "продавецка редкостей",
    "любительница мужчин помладше",
    "сисадминка",
    "историографка",
    "хоккеистка с мячом",
    "наркодилерка",
    "дальнобойщица",
    "физичка-ядерщица",
    "земледельщица",
    "рожденная драконами",
    "прапорщица",
    "интеллигентка",
    "молодая девушка",
    "популистка",
    "горожанка",
    "подруга",
    "владелица фабрики",
    "сторонница левых",
    "докторша наук",
    "вице-президентка",
    "либерал-демократка",
    "добрячка",
    "молодуха",
    "широкой души девушка",
    "ученая",
    "кафкианка",
    "патриотка",
    "кремлеботка",
    "профессионалка",
    "знакомая знакомых",
    "участковая",
    "полковница",
    "боевая подруга",
    "масонка",
    "простачка",
    "любимица мужчин",
    "испанка",
    "марафетчица",
    "бизнес-вумен",
    "женщина",
    "прохожая",
    "случайная встречная",
    "пешеходка",
    "соседка по очереди",
    "сторонница теории заговора",
    "любительница бани",
    "танцовщица",
    "нигилистка",
    "философка",
    "училка",
    "тетя",
    "настоятельница монастыря",
    "известная татарская реперша",
    "коллекционерка монет",
    "затворница",
    "блондинка",
    "шатенка",
    "завсегдатайша баров",
    "тусовщица",
    "госслужащая",
    "госсекретарша",
    "изобретательница",
    "орнитологиня",
    "игрок в покер",
    "отставная матроска",
    "сомалийская пиратка",
    "трейдерка",
    "бас-гитаристка",
    "заводила",
    "фетишистка",
    "гопница",
    "последовательница древнего культа",
    "минималистка",
    "продавщица папирос",
    "охотница за сокровищами",
    "смотрителька маяка",
    "цыганка",
    "мышь-байкер с Марса",
    "пациентка кащенко",
    "таксистка",
    "CEO",
    "кофаундерка",
    "JAVA-программистка",
    "штандартенфюрерка",
    "извращенка",
    "библиотекарша",
    "простофиля",
    "женщина-змеелов",
    "велосипедистка",
    "скалолазка",
    "астронавтка",
    "активистка",
    "правозащитница",
    "бариста",
    "перфекционистка",
    "военнослужащая",
    "феминистка",
    "блогерка",
    "нацистка",
    "твоя мамка",
    "пышка",
    "водителька",
    "подруга друга",
    "заказчица",
    "оптимистка",
    "солистка",
    "деградантка",
    "мужененавистница",
    "трансгендерка",
    "неандерталка",
    "асексуалка",
    "бисексуалка",
    "старуха-процентщица",
    "старуха",
    "актерка",
    "режиссерка",
    "массажистка",
    "директорка",
    "менеджерка",
    "русалка",
    "наездница",
    "наемница",
    "беспризорница",
    "простушка",
    "герцогиня",
    "огородница",
    "жена хоббита",
    "виолончелистка",
    "журналистка",
    "подруга бармена",
    "уборщица",
    "пародистка",
    "актриса мыльной оперы",
    "пловчиха баттерфляем",
    "пловчиха брассом",
    "скрипачка",
    "трубачка",
    "капиталистка",
    "венчурная капиталистка",
    "пилотка",
    "писателька",
    "гомодрилка",
    "гуманоидка",
    "фуражерка",
    "патрульная",
    "филателистка",
    "повариха",
    "сомелье",
    "флибустьерка",
    "депутатка",
    "единороска",
    "славянофилка",
    "западница",
    "булочница",
    "дама",
    "сантехница",
    "сержантка",
    "продавщица",
    "собирателька",
    "домохозяйка",
    "рестораторка",
    "медсестра",
    "искательница приключений",
    "шахматистка",
    "рыбачка",
    "ПТУшница",
    "поэтесса",
    "гимнастка",
    "балерина",
    "гардеробщица",
    "восьмиклассница",
    "фаворитка",
    "студентка",
    "девушка",
    "лыжница",
    "борчиха",
    "ассенизаторка",
    "шахтерка",
    "суфражистка",
    "девушка барабанщика",
    "штангистка",
    "альпинистка",
    "попадья",
    "Хранительница Ключа",
    "крановщица",
    "прелестница",
    "русофобка",
    "модница",
    "милитаристка",
    "пацифистка",
    "австралопитечка",
    "центристка",
    "обманщица",

    "контрабандистка",
    "естествоиспытательница",
    "лодочница",
    "писателька-фантастка",
    "запевала",
    "архитекторка малых форм",
    "фигурантка",
    "анестезиологесса",
    "аспирантка",
    "сторонница традиционных ценностей",
    "ВрИО президентки",
    "предпринимателька",
    "единоличница",
    "пушкинистка",
    "бурятка",
    "светская львица",
    "коллаборационистка",
    "директорка по продукту",
    "стилистка",
    "менторка",
    "стартаперка",
    "видеоблоггерка",
    "блоггерка",
    "скрепоноска",
    "политологесса",
    "идеологесса",
    "Думитражка",
    "зазноба",
    "самочка",
    "евангелистка",
    "иезуитка",
    "плюралистка",
    "поклонница",
    "конкурентка",
    "интервьюерка",
    "наблюдательница",
    "монголо-татарка",
    "идолопоклонница",
    "бабка",
    "республикантка",
    "реформистка",
    "делопроизводительница",
    "иммигрантка",
    "член-корреспондентка",
    "легкоатлетка",
    "полярница",
    "гомеопатка",
    "иностранная агентка",
    "советница",
    "диктаторка",
    "муниципальная депутатка",
    "великомученница",

];

export const NOUNS_RU: IDictionary = { male, female };