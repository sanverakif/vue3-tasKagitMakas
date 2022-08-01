export default {
    material: ["tas", "kagit", "makas"],
    materialPoint: {
        tas: { makas: 1, tas: 0.5, kagit: 0 },
        kagit: { tas: 1, kagit: 0.5, makas: 0 },
        makas: { kagit: 1, makas: 0.5, tas: 0 },
    },
    getComputerChoice() {
        let randomMaterialNumber = Math.floor(Math.random() * 3);
        let computerMaterial = this.material[randomMaterialNumber];
        return computerMaterial;
    },
    result(userChoice, computerChoice) {
        let userPoint = this.materialPoint[userChoice][computerChoice];
        return userPoint
            // setInterval(() => {
            //     if (userPoint == 1) {
            //         return -1
            //     } else if (userPoint == 0.5) {
            //         return 0.5;
            //     } else {
            //         return 0;
            //     }
            // }, 2000);
    }
}