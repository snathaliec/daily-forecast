const moods = ["sunny", "cloudy", "windy", "rainy", "stormy"];
const thoughts = [
    "You have to dream before your dreams can come true. – A.P.J Abdul Kalam", 
    "The best way out is always through. – Robert Frost", "Rational thoughts never drive people’s creativity the way emotions do. – Neil deGrasse Tyson", 
    "It is never too late to be what you might have been. – George Eliot", 
    "Positive thinking will let you do everything better than negative thinking will. – Zig Ziglar",
    "Everyone wants happiness, no one wants pain, but you can’t make a rainbow without a little rain. –  Zion Lee"
];
const accessories = ["Jacket", "Smile", "Sunglasses", "Shoes", "Water", "Snacks", "Keys"];

console.log(moods.length + " thoughts: " + thoughts[0]);
const randomThought = thoughts[0];
const randomMood = moods[0];
const randomAccessory = accessories[0];

const newForecast = () => {
    console.log ("Today's Forecast");
    console.log ("Mood: " + randomMood);
    console.log ("Thought: " + randomThought);
    console.log ("Don't forget: your " + randomAccessory);
}