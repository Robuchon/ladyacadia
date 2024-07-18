<template>
  <svg
    class="overflow-y-hidden"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1536"
    preserveAspectRatio="xMidYMax slice"
  >
    <g fill="#81B822" fill-opacity=".55" transform="translate(55 42)">
      <g id="snow-bottom-layer">
        <g v-for="item in layerBottom" :transform="transalteFuntcion()">
          <g
            style="
              fill-rule: nonzero;
              stroke: none;
              stroke-width: 0.642259;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-dasharray: none;
            "
            id="g132"
            transform="rotate(70)"
          >
            <path
              d="M 10.0107,39.0535 C 7.13161,38.8487 5.62645,37.8109 4.85338,36.6592 C 5.00155,33.8554 5.43084,30.3632 6.63731,27.1939 C 7.32897,25.379 8.31054,23.736 9.51466,22.5283 C 10.8312,21.0887 12.0477,19.981 13.2734,19.0676 C 15.6928,17.2757 17.8153,16.4951 18.487,16.2205 C 19.1664,15.9584 20.3846,15.4657 21.8587,14.9171 C 23.3281,14.4139 25.1079,13.6857 26.6271,12.7954 C 29.7417,11.0923 32.3233,9.1704 32.3192,9.1697 C 32.3244,9.1704 29.5642,10.7002 26.3571,11.97 C 24.7389,12.6598 23.0856,13.1133 21.5424,13.4705 C 20.0238,13.8611 18.7412,14.2588 18.0349,14.532 C 16.7142,15.0834 8.80133,17.6154 4.75967,26.103 C 3.84546,28.2709 3.27209,30.5135 2.90078,32.6149 C 1.98715,32.0992 0.849796,31.1012 0.53998,29.2541 C 0,26.0359 0.300445,16.3791 9.05141,11.0147 C 17.803,5.65096 27.5736,6.723 32.2495,5.14988 C 36.9248,3.57675 38.7831,0 38.7831,0 C 38.7831,0 34.8867,36.4069 10.0107,39.0535 z"
              id="path134"
            />
          </g>
        </g>
      </g>
    </g>
    <g fill="#937618" fill-opacity=".60" transform="translate(65 63)">
      <g id="snow-top-layer">
        <g v-for="item in layerBottom" :transform="transalteFuntcion()">
          <g
            style="
              fill-rule: nonzero;
              stroke: none;
              stroke-width: 0.642259;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-dasharray: none;
            "
            id="g132"
            transform="rotate(70) scale(0.7)"
          >
            <path
              d="M 10.0107,39.0535 C 7.13161,38.8487 5.62645,37.8109 4.85338,36.6592 C 5.00155,33.8554 5.43084,30.3632 6.63731,27.1939 C 7.32897,25.379 8.31054,23.736 9.51466,22.5283 C 10.8312,21.0887 12.0477,19.981 13.2734,19.0676 C 15.6928,17.2757 17.8153,16.4951 18.487,16.2205 C 19.1664,15.9584 20.3846,15.4657 21.8587,14.9171 C 23.3281,14.4139 25.1079,13.6857 26.6271,12.7954 C 29.7417,11.0923 32.3233,9.1704 32.3192,9.1697 C 32.3244,9.1704 29.5642,10.7002 26.3571,11.97 C 24.7389,12.6598 23.0856,13.1133 21.5424,13.4705 C 20.0238,13.8611 18.7412,14.2588 18.0349,14.532 C 16.7142,15.0834 8.80133,17.6154 4.75967,26.103 C 3.84546,28.2709 3.27209,30.5135 2.90078,32.6149 C 1.98715,32.0992 0.849796,31.1012 0.53998,29.2541 C 0,26.0359 0.300445,16.3791 9.05141,11.0147 C 17.803,5.65096 27.5736,6.723 32.2495,5.14988 C 36.9248,3.57675 38.7831,0 38.7831,0 C 38.7831,0 34.8867,36.4069 10.0107,39.0535 z"
              id="path134"
            />
          </g>
        </g>
      </g>
    </g>
    <g fill="#81B822" fill-opacity="1" transform="translate(65 63)">
      <g id="snow-center-layer">
        <g v-for="item in layerBottom" :transform="transalteFuntcion()">
          <g
            style="
              fill-rule: nonzero;
              stroke: none;
              stroke-width: 0.642259;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-dasharray: none;
            "
            id="g132"
            transform="rotate(70) scale(0.5)"
          >
            <path
              d="M 10.0107,39.0535 C 7.13161,38.8487 5.62645,37.8109 4.85338,36.6592 C 5.00155,33.8554 5.43084,30.3632 6.63731,27.1939 C 7.32897,25.379 8.31054,23.736 9.51466,22.5283 C 10.8312,21.0887 12.0477,19.981 13.2734,19.0676 C 15.6928,17.2757 17.8153,16.4951 18.487,16.2205 C 19.1664,15.9584 20.3846,15.4657 21.8587,14.9171 C 23.3281,14.4139 25.1079,13.6857 26.6271,12.7954 C 29.7417,11.0923 32.3233,9.1704 32.3192,9.1697 C 32.3244,9.1704 29.5642,10.7002 26.3571,11.97 C 24.7389,12.6598 23.0856,13.1133 21.5424,13.4705 C 20.0238,13.8611 18.7412,14.2588 18.0349,14.532 C 16.7142,15.0834 8.80133,17.6154 4.75967,26.103 C 3.84546,28.2709 3.27209,30.5135 2.90078,32.6149 C 1.98715,32.0992 0.849796,31.1012 0.53998,29.2541 C 0,26.0359 0.300445,16.3791 9.05141,11.0147 C 17.803,5.65096 27.5736,6.723 32.2495,5.14988 C 36.9248,3.57675 38.7831,0 38.7831,0 C 38.7831,0 34.8867,36.4069 10.0107,39.0535 z"
              id="path134"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>
<script setup>
import { ref } from "vue";

const layerBottom = ref(30);

function transalteFuntcion() {
  const x = Math.floor(Math.random() * 1024) + 1;
  const y = Math.floor(Math.random() * 1536) + 1;

  return "translate(" + x + "," + y + ")";
}
</script>
<style>
.snow {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
.snow .svg {
  position: absolute;
  width: 100%;
  height: 100%;
}
#snow-top-layer {
  will-change: transform;
  transform: translateY(-768px);
  animation: fall 28s infinite linear;
}

#snow-bottom-layer {
  will-change: transform;
  transform: translateY(-768px);
  animation: fall 38s infinite linear;
}

#snow-center-layer {
  will-change: transform;
  transform: translateY(-768px);
  animation: fall 18s infinite linear;
}

@keyframes fall {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  92% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(0); /* remet l'élément à sa position d'origine */
  }
}

@keyframes fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
