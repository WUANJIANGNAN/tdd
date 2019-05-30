module.exports = function main(inputs) {
    // write your code here...
	let price = 6 + 0.25*inputs.parkTime;
	if(inputs.distance > 2 && inputs.distance <= 8)
		price += 0.8*(inputs.distance - 2);
	else if(inputs.distance > 8)
		price += 4.8 + 1.2*(inputs.distance - 8);
	price = Math.round(price);
	return price;
};
