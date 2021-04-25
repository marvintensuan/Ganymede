<template>
    <div class="container rounded" id="events-pane">
        <h2>List of Events</h2>
        <div class="mb-3" v-for='event in sampleEvents' v-bind:key='event.id'>
            <EventCard
                v-bind:eventName='event.name'
                v-bind:eventLocation='event.location'
                v-bind:eventDate='event.date'
            />
        </div>
    </div>
</template>

<script>
import EventCard from './Events/EventCard'

export default {
    name: 'EventsPane',
    components: {
        EventCard
    },
    data(){
        return {
            sampleEvents: [
                {
                    id: 1,
                    name: 'Sample 1',
                    location: 'Miami',
                    date: '2021-01-25'
                },
                {
                    id: 2,
                    name: 'Sample 2',
                    location: 'Detroit',
                    date: '2021-02-14'
                }
            ]
        }
    }
}
</script>
<style scoped>
    #events-pane{
        border-style: solid;
        border-radius: 1px;
        border-color: #770e6c;
    }
    div{
        text-align: justify;
    }
</style>