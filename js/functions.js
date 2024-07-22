/*Функция для проверки длины строки.
Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true,
если строка меньше или равна указанной длине, и false, если строка длиннее.
*/
function lineLength (string, maxLength) {
  return string.length <= maxLength;
}
lineLength();
/*Функция для проверки, является ли строка палиндромом.
Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.
*/

function testPolindrom(line) {
// Приводим строку к одному формату
  const clearLine = line.replaceAll(' ', '').toLowerCase();
  const newLine = '';
  // Проходимя по строке с конца и делаем новую строку
  for (let i = clearLine.length; i > 0; i--) {
    // eslint-disable-next-line no-const-assign
    newLine += clearLine[i - 1];
  }
  // Сравниваем строки
  return clearLine === newLine;
}
testPolindrom('');
