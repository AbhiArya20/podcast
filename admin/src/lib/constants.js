const discountPercentageColumnsPreCalc = [];

for (let i = 0; i <= 100; i++) {
  discountPercentageColumnsPreCalc.push({ value: `${i}`, name: `${i}%` });
}

const colorData = [
  {
    bgColor: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
    iconColor: 'lightblue',
    iconHoverColor: 'blue'
  },
  {
    bgColor: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
    iconColor: 'lightgreen',
    iconHoverColor: 'green'
  },
  {
    bgColor: 'bg-yellow-500',
    hoverColor: 'hover:bg-yellow-600',
    iconColor: 'lightyellow',
    iconHoverColor: 'yellow'
  },
  {
    bgColor: 'bg-purple-500',
    hoverColor: 'hover:bg-purple-600',
    iconColor: 'lightpurple',
    iconHoverColor: 'purple'
  },
  {
    bgColor: 'bg-pink-500',
    hoverColor: 'hover:bg-pink-600',
    iconColor: 'lightpink',
    iconHoverColor: 'pink'
  },
  {
    bgColor: 'bg-gray-500',
    hoverColor: 'hover:bg-gray-600',
    iconColor: 'lightgray',
    iconHoverColor: 'gray'
  },
  {
    bgColor: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
    iconColor: 'lightblue',
    iconHoverColor: 'blue'
  },
  {
    bgColor: 'bg-indigo-500',
    hoverColor: 'hover:bg-indigo-600',
    iconColor: 'lightindigo',
    iconHoverColor: 'indigo'
  },
  {
    bgColor: 'bg-red-500',
    hoverColor: 'hover:bg-red-600',
    iconColor: 'lightred',
    iconHoverColor: 'red'
  }
];

export { discountPercentageColumnsPreCalc, colorData };
