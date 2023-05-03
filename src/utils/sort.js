const sort = (event, todoArray, sortTexts, ...args) => {
    let todoSortArray = [...todoArray];

    switch (event.target.value) {
        // case sortTexts[0]:
        //     todoSortArray = [...todoArray];
        //     break;
        case sortTexts[0]:
            todoSortArray.sort((a, b) => args[0].indexOf(a.label) - args[0].indexOf(b.label));
            break;
        case sortTexts[1]:
            todoSortArray.sort((a, b) => b.second - a.second);
            break;
        case sortTexts[2]:
            todoSortArray.sort((a, b) => args[1].indexOf(a.isActive) - args[1].indexOf(b.isActive));
            break;
        default:
            todoSortArray = [...todoArray];
            break;
    }

    return todoSortArray;
};

export default sort;