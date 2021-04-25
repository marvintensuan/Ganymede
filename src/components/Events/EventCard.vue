<template>
    <div class="card">
        <div class="card-title">{{eventName}}</div>
        <div class="card-body">
            <p>Location: {{eventLocation}}</p>
            <p>Date: {{eventDate}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EventCard',
    props: {
        eventName: String,
        eventLocation: String,
        eventDate: String
    }
}
</script>