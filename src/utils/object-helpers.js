export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.users.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}

// export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
//     return (items.users || []).map(u =>
//         (u[objPropName] === itemId) ? {...u, ...newObjProps} : u);
