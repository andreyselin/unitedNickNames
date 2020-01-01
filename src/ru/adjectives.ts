import { IDictionary } from "../models";

const male = [
    'Адекватный',
    'Аппетитный',
    'Апокрифический',
    'Бегущий',
    'Безработный',
    'Беременный',
    'Бессознательный',
    'Скабрезный',
    'Божественный',
    'Бродячий',
    'Топовый',
    'Верховный',
    'Визжащий',
    'Вкусненький',
    'Водянистый',
    'Военный',
    'Возбужденный',
    'Вечно неприкаянный',
    'Волокнистый',
    'Вопиющий',
    'Гигантский',
    'Гламурный',
    'Натуральный',
    'Головокружительный',
    'Обнаженный',
    'Дееспособный',
    'Деловой',
    'Депрессивный',
    'Долговязый',
    'Доминантный',
    'Достопочтенный',
    'Дрожащий',
    'Желанный',
    'Расфуфыренный',
    'Жирный',
    'Замороженный',
    'Имперский',
    'Интимный',
    'Волосатый',
    'Достойный',
    'Консервативный',
    'Кормящий грудью',
    'Круглолицый',
    'Лохматый',
    'Малюсенький',
    'Мелкий',
    'Мозговитый',
    'Надоедливый',
    'Нервный',
    'Неуклюжий',
    'Неуловимый',
    'Однополый',
    'Окрыленный',
    'Постыдный',
    'Пристыженный',
    'Причудливый',
    'Волевой',
    'Пьяный',
    'Раздетый',
    'Революционный',
    'Резиновый',
    'Святой',
    'Прямо скажем не святой',
    'Скулящий',
    'Советский',
    'Столичный',
    'Сумасбродный',
    'Сумасшедший',
    'Тощий',
    'Трепещущий',
    'Фееричный',
    'Чумазый',
    'Шаловливый',
    'Шипящий',
    'Щеголеватый',
    'Экстраординарный',
    'Половоззрелый',
    'Дальневосточный',
    'Педантичный',
    'Гутаперчивый',
    'Пессимистично настроенный',
    'Оптимистично настроенный',
    'Стопроцентный',
    'Чуть тепленький',
    'Умудренный годами',
    'Вислоухий',
    'Юный',
    'Похорошевший',
    'Грязный',
    'Выверенный',
    'Легендарный',
    'Некий',
    'Фантастический',
    'Вечно перестраховывающийся',
    'Надежный',
    'Обласканный славой',
    'Мимолетный',
    'Внутригосударственный',
    'Истовый',
    'Преисполненный чести',
    'Совестливый',
    'Запоминающийся',
    'Любимый',
    'Краснокнижный',
    'Залихватский',
    'Сладкоголосый',
    'Интеллигентный',
    'Непосредственный',
    'Офисный',
    'Разносторонний',
    'Полный энергии',
    'Стильный',
    'Худощавый',
    'Утонченный',
    'Голубоглазый',
    'Уверенный в своих силах',
    'Деятельный',
    'Легкий на подъем',
    'Гладковыбритый',
    'Прагматичный',
    'Последовательный',
    'Известный в вашем районе',
    'Законопослушный',
    'Непосредственный',
    'Настоящий',
    'Всегда улыбчивый',
    'Отмеченный медалью',
    'Выдержанный',
    'Запасливый',
    'Лысый',
    'Тот еще',
    'Представившийся Виталием',
    'Успешный',
    'Великовозрастный',
    'Квазигосударственный',
    'Широкоплечий',
    'Разнузданный',
    'Обезумевший от одиночества',
    'Уверенный в своих силах',
    'Раскрепощенный',
    'Настроенный решительно',
    'Раздобревший',
    'Хорошо устроенный',
    'Беспринципный',
    'Исполинский',
    'Бессовестно одетый',
    'Подкаченный',
    'Энергичный',
    'Чванливый',
    'Преуспевающий',
    'Перебравший накануне',
    'Поборовший презрение',
    'Внезапно опозорившийся',
    'Сексуальный',
    'До безобразия гибкий',
    'Идущий по головам',
    'Давно эмигрировавший',
    'Неравнодушный',
    'Довольно неряшливый',
    'Двухметровый',
    'Неприметный',
    'Поселковый',
    'Поздний',
    'Припозднившийся',
    'Асексуальный',
    'Бисексуальный',
    'Самый умный',
    'Себялюбивый',
    'Любящий',
    'Стеснительный',
    'Прекраснодушный',
    'Опарафинившийся',
    'Антагонистический',
    'Баснословный',
    'Безбожный',
    'Завзятый',
    'Завидный',
    'Закадычный',
    'Остервенелый',
    'Комнатный',
    'Фривольный',
    'Приятный глазу',
    'Подарочный',
    'Импортный',
    'Испаноязычный',
    'Приветливый',
    'Заботливый',
    'Бомбический',
    'Заветный',
    'Розовощекий',
    'Пестрый',
    'Сладкоголосый',
    'Смелый в суждениях',
    'Смелый',
    'Упитанный',
    'Переполненный чувствами',
    'Расслабившийся',
    'Сосредоточенный',
    'Исконный',
    'Анизотропный',
    'Соблазнительный',
    'Бесподобный',
    'Полуспортивный',
    'Залдостанный',
    'Крайне правый',
    'Крайне левый',
    'Запасливый',
    'Открытый для нового',
    'Сердечный',
    'Доморощенный',
    'Гладкошерстный',
    'Покрытосеменной',
    'Ласковый',
    'Демократически избранный',
    'Отзывчивый',
    'Нестандартный',
    'Авторитарный',
    'Шерстистый',
    'Вечно чем-то недовольный',
    'Ветренный',
    'Заскорузлый',
    'Обмазанный гуталином',
    'Чешуйчатый',
    'Влюбленный',
    'Судьбоносный',
    'Вальсирующий',
    'Мемный',
    'Трехцветный',
    'Повсеместный',
    'Закрепощенный',
    'Раскрепощенный',
    'Крепостной',
    'Допутинский',
    'Поистине царский',
];

const female = [
    'Адекватная',
    'Аппетитная',
    'Апокрифическая',
    'Бегущая',
    'Безработная',
    'Беременная',
    'Бессознательная',
    'Скабрезная',
    'Божественная',
    'Бродячая',
    'Топовая',
    'Верховная',
    'Визжащая',
    'Вкусненькая',
    'Водянистая',
    'Военная',
    'Возбужденная',
    'Вечно неприкаянная',
    'Волокнистая',
    'Вопиющая',
    'Гигантская',
    'Гламурная',
    'Натуральная',
    'Головокружительная',
    'Обнаженная',
    'Дееспособная',
    'Деловая',
    'Депрессивная',
    'Долговязая',
    'Доминантная',
    'Достопочтенная',
    'Дрожащая',
    'Дурацкая',
    'Желанная',
    'Расфуфыренная',
    'Жирная',
    'Замороженная',
    'Имперская',
    'Интимная',
    'Волосатая',
    'Достойная',
    'Консервативная',
    'Кормящая грудью',
    'Круглолицая',
    'Лохматая',
    'Малюсенькая',
    'Мелкая',
    'Мозговитая',
    'Надоедливая',
    'Немая',
    'Нервная',
    'Неуклюжая',
    'Неуловимая',
    'Однополая',
    'Окрыленная',
    'Пристыженная',
    'Причудливая',
    'Волевая',
    'Пьяная',
    'Революционная',
    'Резиновая',
    'Святая',
    'Прямо скажем не святая',
    'Советская',
    'Столичная',
    'Сумасбродная',
    'Сумасшедшая',
    'Тощая',
    'Трепещущая',
    'Фееричная',
    'Чумазая',
    'Шипящая',
    'Щеголеватая',
    'Экстраординарная',
    'Половозрелая',
    'Дальневосточная',
    'Педантичная',
    'Гутаперчивая',
    'Пессимистично настроенная',
    'Оптимистично настроенная',
    'Стопроцентная',
    'Чуть тепленькая',
    'Умудрённая годами',
    'Вислоухая',
    'Юная',
    'Похорошевшая',
    'Грязная',
    'Выверенная',
    'Легендарная',
    'Некая',
    'Фантастическая',
    'Вечно перестраховывающаяся',
    'Надежная',
    'Обласканная славой',
    'Мимолетная',
    'Внутригосударственная',
    'Истовая',
    'Преисполненная чести',
    'Совестливая',
    'Запоминающаяся',
    'Любимая',
    'Краснокнижная',
    'Залихватская',
    'Сладкоголосая',
    'Интеллигентная',
    'Непосредственная',
    'Офисная',
    'Разносторонняя',
    'Полная энергии',
    'Стильная',
    'Худощавая',
    'Утонченная',
    'Голубоглазая',
    'Уверенная в своих силах',
    'Деятельная',
    'Легкая на подъем',
    'Гладковыбритая',
    'Прагматичная',
    'Последовательная',
    'Известная в вашем районе',
    'Законопослушная',
    'Непосредственная',
    'Настоящая',
    'Всегда улыбчивая',
    'Отмеченная медалью',
    'Выдержанная',
    'Запасливая',
    'Лысая',
    'Та ещё',
    'Представившаяся Анфисой',
    'Успешная',
    'Великовозрастная',
    'Квазигосударственная',
    'Широкобедрая',
    'Разнузданная',
    'Обезумевшая от одиночества',
    'Уверенная в своих силах',
    'Раскрепощенная',
    'Настроенная решительно',
    'Раздобревшая',
    'Хорошо устроенная',
    'Беспринципная',
    'Исполинская',
    'Бессовестно одетая',
    'Подкаченная',
    'Энергичная',
    'Чванливая',
    'Попутавшая',
    'Преуспевающая',
    'Перебравшая накануне',
    'Поборовшая презрение',
    'Внезапно опозорившаяся',
    'Сексуальная',
    'До безобразия гибкая',
    'Идущая по головам',
    'Давно эмигрировшая',
    'Неравнодушная',
    'Довольно неряшливая',
    'Двухметровая',
    'Неприметная',
    'Поселковая',
    'Поздняя',
    'Ранняя',
    'Припозднившаяся',
    'Асексуальная',
    'Бисексуальная',
    'Самая умная',
    'Себялюбивая',
    'Любящая',
    'Стеснительная',
    'Прекраснодушная',
    'Опарафинившаяся',
    'Антагонистическая',
    'Баснословная',
    'Безбожная',
    'Завзятая',
    'Завидная',
    'Закадычная',
    'Комнатная',
    'Фривольная',
    'Приятная глазу',
    'Подарочная',
    'Импортная',
    'Испаноязычная',
    'Приветливая',
    'Заботливая',
    'Бомбическая',
    'Заветная',
    'Розовощекая',
    'Пестрая',
    'Сладкоголосая',
    'Смелая в суждениях',
    'Смелая',
    'Упитанная',
    'Переполненная чувствами',
    'Расслабившаяся',
    'Сосредоточненная',
    'Исконная',
    'Анизотропная',
    'Соблазнительная',
    'Бесподобная',
    'Полуспортивная',
    'Залдостанная',
    'Крайне правая',
    'Крайне левая',
    'Запасливая',
    'Открытая для нового',
    'Сердечная',
    'Доморощенная',
    'Гладкошерстная',
    'Ласковая',
    'Демократически избранная',
    'Отзывчивая',
    'Нестандартная',
    'Авторитарная',
    'Шерстистая',
    'Вечно чем-то недовольная',
    'Ветренная',
    'Заскорузлая',
    'Обмазанная гуталином',
    'Чешуйчатая',
    'Влюбленная',
    'Судьбоносная',
    'Вальсирующая',
    'Мемная',
    'Трехцветная',
    'Повсеместная',
    'Закрепощенная',
    'Раскрепощенная',
    'Крепостная',
    'Допутинская',
    'Поистине царская',
];

export const ADJECTIVES_RU: IDictionary = { male, female };