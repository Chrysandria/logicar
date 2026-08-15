<template>
    <header class="bg-dark">
        <nav class="container navbar navbar-expand-lg navbar-dark d-flex justify-content-between px-2">
            <a href="" class="navbar-brand fs-3 fw-semibold text-primary">
                Logi<span class="text-danger">Car</span>
            </a>
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <section class="collapse navbar-collapse flex-grow-0" id="menu">
                <section class="ms-auto d-flex flex-wrap gap-2 mt-2 mt-lg-0">
                    <button class="btn btn-outline-primary d-flex gap-3">
                        <i class="bi bi-house"></i>
                        Acceuil
                    </button>
                    <button class="btn btn-primary d-flex gap-3">
                        <i class="bi bi-box-arrow-right"></i>
                        Se Connecter
                    </button>
                </section>
            </section>
        </nav>
        <section class="bg-light w-100 p-2">
            <div class="container">
                <div class="d-flex justify-content-center text-dark small">
                        {{ heure }}
                    </div>
            </div>
        </section>
    </header>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { startOfWeek, addDays, format } from 'date-fns';
import { fr } from 'date-fns/locale'
async function test() {
    let request = {
        method: "post",
        url: "/test"
    };

    linear(request);

}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const nextMonday = startOfWeek(
    addDays(new Date(), 7),
    { weekStartsOn: 1 }
);

const nextWeek = Array.from({ length: 7 },
    (_, i) => {
        const date = addDays(nextMonday, i);

        return {
            jour: capitalize(format(date, 'EEEE', { locale: fr })),
            date: format(date, 'yyyy-MM-dd')
        };
    }
);

const heure = ref('');

let interval;

function actualiser() {
    heure.value = format(new Date(), "HH:mm");

}

onMounted(() => {
    console.log(nextWeek);
    actualiser();
    setInterval(actualiser, 1000)

})

</script>