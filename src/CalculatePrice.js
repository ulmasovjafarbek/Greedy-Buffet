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
    for (let i = 0; i < items.length; i++) {
        let curWt = items[i].weight;
        if (q - curWt > 0) {
            q -= curWt;
            ans.push(items[i]); }
        else {
            let fraction = q / curWt;
            let new_item = {
                title: items[i].title,
                price: parseFloat((items[i].price * fraction).toFixed(2)),
                weight: parseFloat((items[i].weight * fraction).toFixed(2)),
                img: items[i].img
            }
            ans.push(new_item);
            q -= parseFloat((curWt * fraction).toFixed(2));
            break;
        }
    }
    return ans;
}
  
// let items = [[70,400],[96,20],[60,300]];
// let queries = [500];
// console.log(maxBeauty(items,queries));
export default maxBeauty;