<template>
    <section id="features" class="grey lighten-3">
        <div class="py-12"></div>

        <v-container class="text-center">
            <h2> Gamers Hub </h2>

            <v-responsive class="mx-auto mb-12" width="56"></v-responsive>

            <v-row dense>
                <v-col
                    v-for="(feature, i) in features"
                    :key="i"
                    md="4"
                    class="pa-2"
                >
                    <v-card class="py-12 px-4" color="grey lighten-5" flat>
                        <v-theme-provider dark>
                            <div>
                                <v-avatar color="primary" size="88">
                                    <v-icon large >{{feature.icon}}</v-icon>
                                </v-avatar>
                            </div>
                        </v-theme-provider>

                        <v-card-title
                            class="justify-center font-weight-black text-uppercase"
                            v-text="feature.title"
                        ></v-card-title>

                        <v-card-text class="subtitle-1" v-text="feature.text"></v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <div class="py-12"></div>
    </section>
</template>

<script>
export default {
    name: "Features",

    data: () => ({
        features: [
            {
                icon: "mdi-account-group-outline",
                title: "Who we are?",
                text:
                    "The house is located in one of the best city areas right on the beach, which makes its surroundings amazingly peaceful!",
            },
            {
                icon: "mdi-update",
                title: "Value Proposition",
                text:
                    "It is as modern as it is functional. New countertops, fridge, 6-range burners, and major appliances are included!",
            },
            {
                icon: "mdi-shield-outline",
                title: "How it works",
                text:
                    "While overlooking the cityscape, the house is situated right on the beach. How much better can it get?",
            },
        ],
    }),
};
</script>