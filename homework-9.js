// Задание 2. Фильтрация массива чисел
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersFromFive = numbers.filter(num => num >= 5);

console.log("Исходный массив чисел:", numbers);
console.log("Отфильтрованный массив (от 5):", numbersFromFive);

// Задание 3. Массив строк и проверка наличия
const movies = ["Интерстеллар", "Начало", "Матрица", "Гладиатор", "Аватар"];
const hasMatrix = movies.includes("Матрица");
const hasTitanic = movies.includes("Титаник");
console.log("Есть ли 'Матрица' в списке?", hasMatrix); // true
console.log("Есть ли 'Титаник' в списке?", hasTitanic); // false

// Задание 4. Функция для переворота массива
function reverseArray(arr) {
    return [...arr].reverse();
}
const reversedNumbers = reverseArray(numbers);
console.log("Перевернутый массив чисел:", reversedNumbers);
const reversedMovies = reverseArray(movies);
console.log("Перевернутый массив фильмов:", reversedMovies);

// Задание 7. Фильтрация по почте (.com)
const comEmailsComments = socialMediaComments.filter(comment => 
    comment.email.endsWith(".com")
);
console.log("Комментарии с почтой .com:", comEmailsComments);

// Задание 8. Добавление postId в зависимости от id
const commentsWithPostId = socialMediaComments.map(comment => {
    return {
        ...comment,
        postId: comment.id <= 5 ? 2 : 1 
    };
});
console.log("Комментарии с postId:", commentsWithPostId);

// Задание 9. Оставить только id и имя
const shortComments = socialMediaComments.map(comment => {
    return {
        id: comment.id,
        author: comment.author
    };
});
console.log("Короткие объекты (только id и имя):", shortComments);


// Задание 10. Добавление свойства isValid
const commentsWithValidation = socialMediaComments.map(comment => {
    return {
        ...comment,
        isValid: comment.text.length > 180 
    };
});
console.log("Комментарии с проверкой на длину:", commentsWithValidation);