module.exports = function main(inputs) {
    // write your code here...
    let price = 0;
	if(inputs.distance < 2)
	{
		price = 6 + 0.25*inputs.parkTime;
	}
	else if(inputs.distance <= 8)
	{
		price = 6 + 0.8*(inputs.distance - 2) + 0.25*inputs.parkTime;
	}
	else
	{
		price = 10.8 + 1.2*(inputs.distance - 8) + 0.25*inputs.parkTime;
	}
	price = Math.round(price); 
	return price;
};
