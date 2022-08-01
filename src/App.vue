<template>
  <div>
    <div class="images">
      <div class="player-image">
        <img src="@/assets/tas.png" alt="" />
      </div>
      <div class="computer-image">
        <img src="@/assets/tas.png" alt="" />
      </div>
    </div>
    <div class="buttons">
      <div>
        <button @click="tasClick()">Başlat</button>
      </div>
      <!-- <div>
        <button @click="clearForm">Temizle</button>
      </div> -->
    </div>
    <div class="result">
      <p>{{ result }}</p>
    </div>
    <!-- <div class="btnClear"><button @click="clearForm">temizle</button></div> -->
  </div>
</template>

<script>
import gameService from "@/components/services/gameService";
export default {
  name: "App",
  data() {
    return {
      result: "",
    };
  },
  components: {
    // Home,
  },
  methods: {
    tasClick() {
      this.tasKagitMakasTikla("tas");
    },

    tasKagitMakasTikla(userMaterial) {
      let computerMaterial = gameService.getComputerChoice();
      let userPoint = gameService.result(userMaterial, computerMaterial);

      const computerIcon = document.querySelector(".computer-image img");
      // computerIcon.src = `@/assets/${computerMaterial}.png`;

      setTimeout(() => {
        computerIcon.src = `../assets/${computerMaterial}.png`;
      }, 1000);

      // this.$el.querySelector(".aaa").src = "@assets/kagit.png";
      // this.$el.querySelector(".aaa").src = `@/assets/${computerMaterial}.png`;

      if (userPoint == 0) {
        this.result = `${userMaterial} = 0 ${computerMaterial} = 1  Kaybettiniz`;
      } else if (userPoint == 0.5) {
        this.result = `${userMaterial} = 0.5 ${computerMaterial} = 0.5  Berabere`;
      } else {
        this.result = `${userMaterial} = 1 ${computerMaterial} = 0  Kazandınız`;
      }
      setInterval(() => {
        this.clearForm();
      }, 1500);
    },
    clearForm() {
      this.result = "";
    },
  },
};
</script>

<style>
button {
  border: 1px solid goldenrod;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
}
.buttons {
  min-height: 10vh;
  color: white;
  width: 50vw;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-around;
}
.buttons button {
  background-color: goldenrod;
  margin: 20px 20px;
}
.buttons button:hover {
  background-color: rgb(233, 184, 61);
}
.akif {
  display: flex;
  flex-direction: row;
  justify-content: center;
  animation: emre 0.3s ease-in-out infinite alternate;
}

.images {
  display: flex;
  flex-direction: row;
  justify-content: center;
  animation: animation 0.3s ease-in-out infinite alternate;
}

@keyframes animation {
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0px);
  }
}

.player-image {
  /* opacity: 1; */
  transform: rotateY(180deg);
}

/* .buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
} */
.result {
  display: flex;
  justify-content: center;
}
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */
/* background-size: 100% 100%; */
/* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
/* animation: changeImage 40s linear infinite; */

/* #imgSlider {
  width: 200px;
  height: 200px;
  animation: changeImage 20s;
  background-size: 100% 100%;
}

@keyframes changeImage {
  1% {
    background-image: url("@/assets/tas.png");
  }
  2% {
    background-image: url("@/assets/kagit.png");
  }
  3% {
    background-image: url("@/assets/makas.png");
  }
}
.btnClear {
  display: flex;
  justify-content: center;
}
.result {
  display: flex;
  justify-content: center;
} */
/* .images {
  margin-top: 40px;
}
.tas,
.makas {
  transform: rotateY(180deg);
}
img {
  height: 200px;
  width: 200px;
} */
</style>
