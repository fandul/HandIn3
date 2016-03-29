
// to insert item in db
db.cars.insert(
    {
        Make: "Ferrari",
        details: {
            model: "F434",
            year: 1975
        },
    }
)

//An empty query document ({}) selects all documents in the collection:

    db.inventory.find( {} )

// for updating
db.inventory.update(
    { item: "MNO2" },
    {
        $set: {
            category: "apparel",
            details: { model: "14Q3", manufacturer: "XYZ Company" }
        },
        $currentDate: { lastModified: true }
    }
)

// The following example removes all documents from the inventory collection where the type field equals food:
    db.inventory.remove( { type : "food" } )