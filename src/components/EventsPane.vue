<template>
    <div class="container rounded" id="events-pane">
        <h2>List of Events</h2>
        <div class="mb-3" v-for='event in sampleEvents' :key='event.id'>
            <EventCard
                :eventName='event.name'
                :eventLocation='event.location'
                :eventDate='event.date'
            />
        </div>
    </div>
</template>

<script>
import EventCard from './Events/EventCard'
import axios from 'axios'

export default {
    name: 'EventsPane',
    components: {
        EventCard
    },
    data(){
        return {
            sampleEvents: [],
        }
    },
    mounted(){
        axios
            .get('http://127.0.0.1:5000/')
            .then(res => (this.sampleEvents = res['data']))
            .catch(error => console.log(error))
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