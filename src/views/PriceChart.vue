<template>
  <div>
    <LoadingScreen v-if="isLoading" />
    <v-card v-if="!isLoading" class="pa-1 mt-5">
      <div class="graphs" id="graphs" />
    </v-card>
  </div>
</template>
<script>
  import Rickshaw from "rickshaw";
  import "rickshaw/rickshaw.min.css";
  import LoadingScreen from "./LoadingScreen";

  export default {
    name: "PriceChart",
    components: {
      LoadingScreen
    },
    mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, 4000);
    },
    data() {
      return {
        graphs: {},
        first: true,
        isLoading: true
      };
    },
    sockets: {
      connection: function() {
        // eslint-disable-next-line no-console
        console.log("Connected to Server");
      },
      stocks: function(message) {
        var graphContainer = document.getElementById("graphs");

        if (this.first) {
          const palette = new Rickshaw.Color.Palette({ scheme: "colorwheel" });

          message.map(pokemon => {
            let graphTitle = document.createElement("h1");
            let graphElement = document.createElement("div");

            graphTitle.textContent = pokemon.title;
            graphContainer.appendChild(graphTitle);
            graphContainer.appendChild(graphElement);

            let graph = new Rickshaw.Graph({
              element: graphElement,
              width: "300",
              height: "200",
              renderer: "line",
              series: new Rickshaw.Series.FixedDuration(
                [
                  {
                    name: pokemon.title,
                    color: palette.color()
                  }
                ],
                undefined,
                {
                  timeInterval: 5000,
                  maxDataPoints: 1000,
                  timeBase: new Date().getTime() / 1000
                }
              )
            });
            graph.configure({
              width: graphContainer.clientWidth
            });
            new Rickshaw.Graph.Axis.Time({ graph: graph });
            new Rickshaw.Graph.Axis.Y({
              graph: graph,
              orientation: "left",
              tickFormat: Rickshaw.Fixtures.Number.formatKMBT
            });
            new Rickshaw.Graph.HoverDetail({
              graph: graph
            });
            graph.render();
            let slug = this.slugify(pokemon.title);
            this.graphs[slug] = {
              name: pokemon.title,
              graph: graph
            };
          });
          this.first = false;
        }
        message.map(pokemon => {
          let slug = this.slugify(pokemon.title);
          let data = {};
          data[pokemon.title] = pokemon.startingPrice;
          this.graphs[slug].graph.series.addData(data);
          this.graphs[slug].graph.render();
        });
      }
    },
    methods: {
      slugify(text) {
        return text
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "-") // Replace spaces with -
          .replace(/[^\w-]+/g, "") // Remove all non-word chars
          .replace(/--+/g, "-") // Replace multiple - with single -
          .replace(/^-+/, "") // Trim - from start of text
          .replace(/-+$/, ""); // Trim - from end of text
      }
    }
  };
</script>
