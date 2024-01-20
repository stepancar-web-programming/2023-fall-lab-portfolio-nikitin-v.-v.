const path = require('path');

module.exports = {
  entry: './src/index.html', 
  output: {
    path: path.resolve(__dirname, 'dist'), // Путь к папке, в которую будет собран ваш проект
    filename: 'bundle.js' // Имя файла, в который будет собран ваш проект
  },
  module: {
    rules: [
        {
          test: /\.js$/, // Проверять все файлы с расширением .js
          exclude: /node_modules/, // Исключить папку node_modules
          use: {
            loader: 'babel-loader', // Использовать Babel для транспиляции JavaScript
            options: {
              presets: ['@babel/preset-env'] // Настройки Babel
            }
          }
        }
      ],
    rules: [
        {
          test: /\.html$/, // Проверять все файлы с расширением .html
          use: [
            {
              loader: 'html-loader', // Использовать загрузчик HTML
              options: {
                minimize: true // Минимизировать HTML-код
              }
            }
          ]
        }
      ],
    rules: [
        {
          test: /\.css$/, // Проверять все файлы с расширением .css
          use: [
            'style-loader', // Добавить стили в тег <style> внутри HTML
            'css-loader' // Загрузить и обработать CSS-файлы
          ]
        }
      ]
  }
};