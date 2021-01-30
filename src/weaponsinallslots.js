"use strict";

exports.mod = () => {
    
    if (!serverConfig.rebuildCache) {
        return;
    }

    logger.logInfo("Caching: life-LifeMechanisms");

    let base = fileIO.parse(fileIO.read(db.user.cache.items));

    for (let file in base.data) {
        let fileData = base.data[file];
        // adding ability to put guns in any slot
        if (fileData._name === "Default Inventory") {
            fileData._props.Slots[0]._props.filters[0].Filter = ["5447b5fc4bdc2d87278b4567","5447b5f14bdc2d61278b4567","5447bedf4bdc2d87278b4568","5447bed64bdc2d97278b4568","5447b6194bdc2d67278b4567","5447b6094bdc2dc3278b4567","5447b5e04bdc2d62278b4567","5447b6254bdc2dc3278b4568","5447bee84bdc2dc3278b4569","5447b5cf4bdc2d65278b4567","543be6564bdc2df4348b4568"];
            };
        if (fileData._name == "Default Inventory") {
            fileData._props.Slots[1]._props.filters[0].Filter = ["5447b5fc4bdc2d87278b4567","5447b5f14bdc2d61278b4567","5447bedf4bdc2d87278b4568","5447bed64bdc2d97278b4568","5447b6194bdc2d67278b4567","5447b6094bdc2dc3278b4567","5447b5e04bdc2d62278b4567","5447b6254bdc2dc3278b4568","5447bee84bdc2dc3278b4569","5447b5cf4bdc2d65278b4567","543be6564bdc2df4348b4568"];
            };
        if (fileData._name == "Default Inventory") {
            fileData._props.Slots[2]._props.filters[0].Filter = ["5447b5fc4bdc2d87278b4567","5447b5f14bdc2d61278b4567","5447bedf4bdc2d87278b4568","5447bed64bdc2d97278b4568","5447b6194bdc2d67278b4567","5447b6094bdc2dc3278b4567","5447b5e04bdc2d62278b4567","5447b6254bdc2dc3278b4568","5447bee84bdc2dc3278b4569","5447b5cf4bdc2d65278b4567","543be6564bdc2df4348b4568"];
            };
        if (fileData._name == "Default Inventory") {
            fileData._props.Slots[3]._props.filters[0].Filter = ["5447e1d04bdc2dff2f8b4567","5447b5fc4bdc2d87278b4567","5447b5f14bdc2d61278b4567","5447bedf4bdc2d87278b4568","5447bed64bdc2d97278b4568","5447b6194bdc2d67278b4567","5447b6094bdc2dc3278b4567","5447b5e04bdc2d62278b4567","5447b6254bdc2dc3278b4568","5447bee84bdc2dc3278b4569","5447b5cf4bdc2d65278b4567","543be6564bdc2df4348b4568"];
            };
            base.data[fileData._id] = fileData;
        
        }
        fileIO.write("user/cache/items.json", base);
        logger.logSuccess("[MOD] weaponsinallslots; Applied")
}