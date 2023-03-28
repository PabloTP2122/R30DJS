function findFamousCats(cats) {
    // Variables
    let famousCats = [];
    let maxFollowers;
    // Max folloers (number)
    maxFollowers = cats.map(cat => cat.followers.reduce((total, follows) => total + follows)).reduce((previous, current) => previous > current ? previous : current, undefined);

    // Most famous cat or cats (array) 
    let mostFamous = cats.filter(cat => cat.followers.reduce((total, follows) => total + follows) >= maxFollowers);

    //Name of most famous cats (array) 
    famousCats = mostFamous.map(famous => famous.name);
    return famousCats;
}

gatos = [{
        name: "Luna",
        followers: [500, 200, 300]
    },
    {
        name: "Michi",
        followers: [100, 300]
    },
]
gatos2 = [{
        name: "Mimi",
        followers: [320, 120, 70]
    },
    {
        name: "Milo",
        followers: [400, 300, 100, 200]
    },
    {
        name: "Gizmo",
        followers: [250, 750]
    }
]

gatos3 = [{
        name: "Mimi",
        followers: [250, 750, 1000, 2500]
    },
    {
        name: "Milo",
        followers: [250, 750, 1000, 2500, 8000]
    },
    {
        name: "Gizmo",
        followers: [250, 750, 1000, 2500]
    }
]

console.log(findFamousCats(gatos2));