const color = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]

const listColors = () => {
    return [...colors.map((aColor) => {return aColor.color})] 
  }; 
  
  const findValue = (aColor) => {
    const colorIdx = colors.find(color => color.color === aColor);
    const value = colors[colorIdx].value
    return {value}; 
  }
  
  const findColor = (aVal) => {
    const valIdx = colors.find(color => color.value === aVal);
    //const color
    return {...valIdx}; 
  }

  module.exports = { listColors, findValue, findColor };