// the used links
var links = [
    "www.eatingwell.com/recipe/251038/pineapple-green-smoothie/",
    "www.eatingwell.com/recipe/248344/fast-strawberry-frozen-yogurt/",
    "allrecipes.com/recipe/215163/strawberry-orange-banana-smoothie/?internalSource=rotd&referringId=138&referringContentType=recipe%20hub",
    "allrecipes.com/recipe/214936/razzy-blue-smoothie/?internalSource=staff%20pick&referringId=138&referringContentType=recipe%20hub"];

openStuff = function () {
    // get a random number between 0 and the number of links
    var randIdx = Math.random() * links.length;
    // round it, so it can be used as array index
    randIdx = parseInt(randIdx, 10);
    // construct the link to be opened
    var link = 'http://' + links[randIdx];
    // open it in a new window / tab (depends on browser setting)
    window.open(link);
};