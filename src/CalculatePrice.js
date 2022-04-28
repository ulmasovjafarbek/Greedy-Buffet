function sortByPrice(a, b) {
    if (a.price === b.price) {
      return 0;
    } else {
      return (a.price > b.price) ? -1 : 1;
    }
}

function maxBeauty(items, q) {
    const ans = greedy(items, q);
    return ans;
}

function greedy(items, q) {
    let ans = [];
    items.sort(sortByPrice);
    items.forEach(item => {
        let curWt = item.weight;
        if (q - curWt >= 0) {
            q -= curWt;
            ans.push(item);
        }
    })
    return ans;
}
  
// let items = [[70,400],[96,20],[60,300]];
// let queries = [500];
// console.log(maxBeauty(items,queries));
export default maxBeauty;