<template>
<h1>Create an event</h1>

<div class="form-container">

  <form @submit.prevent="onSubmit">     <!-- Preventing the default behaviour on this form and instead triggering the onSubmit method whenever our button is clicked. -->
    <label>Select a category: </label>
    <select v-model="event.category">
      <option
        v-for="option in categories"
        :value="option"
        :key="option"
        :selected="option === event.category"
      >{{ option }}</option>
    </select>

    <h3>Name & describe your event</h3>

    <label>Title</label>
    <input
      v-model="event.title"
      type="text"
      placeholder="Title"
    >

    <label>Description</label>
    <input
      v-model="event.description"
      type="text"
      placeholder="Description"
    />

    <h3>Where is your event?</h3>

    <label>Location</label>
    <input
      v-model="event.location"
      type="text"
      placeholder="Location"
    />

    <h3>When is your event?</h3>
    <label>Date</label>
    <input
      v-model="event.date"
      type="text"
      placeholder="Date"
    />

    <label>Time</label>
    <input
      v-model="event.time"
      type="text"
      placeholder="Time"
    />

    <button type="submit">Submit</button>
  </form>
  <div>{{ $store.state.events }}</div> <!--For testing purposes -->

</div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import EventService from '@/services/EventService.js'

export default {
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community',
        'marketing',
        'sponsorship',
        'test',
        'webinars'
      ],
      event: {
        id: '',
        category: '',
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        organizer: ''
      }
    }
  },
  methods: {

// Set our organizer field equals to the state whenever we submit the form. We only accessing our state exactly when we need it so we're avoiding setting our data with it, and then that state somehow changing and then we have still data that we accidentally submitting :(.  
		
onSubmit() {
  const event = {
    ...this.event,
    id: uuidv4(),  // This method will created a complex, unique id that we can use every time we clicked submit.
    organizer: this.$store.state.user
  }
  	EventService.postEvent(event)
      .then(() => {
      	this.$store.commit('ADD_EVENT', event) //For adding event to VueX state, you have to commit the ADD_EVENT mutation, specified by name, and pass in the event as a payload
      })
      .catch(error => {
    	console.log(error)
      })
    }
  }
}
</script>