const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    plot: {
      type: "String",
    },
    genres: {
      type: ["String"],
    },
    runtime: {
      $numberInt: {
        type: "Date",
      },
    },
    cast: {
      type: ["String"],
    },
    poster: {
      type: "String",
    },
    title: {
      type: "String",
    },
    fullplot: {
      type: "String",
    },
    languages: {
      type: ["String"],
    },
    released: {
      $date: {
        $numberLong: {
          type: "String",
        },
      },
    },
    directors: {
      type: ["String"],
    },
    rated: {
      type: "String",
    },
    awards: {
      wins: {
        $numberInt: {
          type: "Date",
        },
      },
      nominations: {
        $numberInt: {
          type: "Date",
        },
      },
      text: {
        type: "String",
      },
    },
    lastupdated: {
      type: "Date",
    },
    year: {
      $numberInt: {
        type: "Date",
      },
    },
    imdb: {
      rating: {
        $numberDouble: {
          type: "Date",
        },
      },
      votes: {
        $numberInt: {
          type: "Date",
        },
      },
      id: {
        $numberInt: {
          type: "Date",
        },
      },
    },
    countries: {
      type: ["String"],
    },
    type: {
      type: "String",
    },
    tomatoes: {
      viewer: {
        rating: {
          $numberDouble: {
            type: "Date",
          },
        },
        numReviews: {
          $numberInt: {
            type: "Date",
          },
        },
        meter: {
          $numberInt: {
            type: "Date",
          },
        },
      },
      fresh: {
        $numberInt: {
          type: "Date",
        },
      },
      critic: {
        rating: {
          $numberDouble: {
            type: "Date",
          },
        },
        numReviews: {
          $numberInt: {
            type: "Date",
          },
        },
        meter: {
          $numberInt: {
            type: "Date",
          },
        },
      },
      rotten: {
        $numberInt: {
          type: "Date",
        },
      },
      lastUpdated: {
        $date: {
          $numberLong: {
            type: "String",
          },
        },
      },
    },
    num_mflix_comments: {
      $numberInt: {
        type: "Date",
      },
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("movies", MovieSchema);

module.exports = Movie;
