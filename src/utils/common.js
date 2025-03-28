export const getInitials = (name) => {
    if(!name) return '';

    const parts = name.split(' ').filter(part => part.length > 0);
    if(parts.length === 1) return parts[0].substring(0,2).toUpperCase();
    else{
        return parts[0].charAt(0).toUpperCase() + parts[1].charAt(0).toUpperCase();
    }
};

export const getRandomColor = (name) => {
    const colors = [
        "16, 24, 39",
        "20, 83, 45",
        "120, 53, 15",
        "127, 29, 29",
        "158, 25, 86",
        "51, 31, 128",
        "187, 71, 36",
        "232, 105, 21",
        "72, 66, 167",
        "53, 122, 91",
        "2, 5, 141",
       ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

