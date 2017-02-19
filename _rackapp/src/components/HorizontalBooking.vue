<template>
  <div class="horizontal-booking">

    {{ booked }} slotss

    <div class="timeline">

      <template v-for="slot in slots">

        <input type="checkbox" v-model="booked"
                :id="slot.id" :name="slot.id"
                :value="slot.time" :disabled="slot.reserved" />

        <label class="timeslot" v-bind:class="{ reserved: slot.reserved }" :for="slot.id">
             <div class="time">{{ slot.time }}</div>
             <span></span>
        </label>

       </template>


    </div>


  </div>
</template>

<script>
export default {
  name: 'horizontal-booking',
  data () {
    return {
      booked: [],
      slots: [
        {id: "c1", time: "00:00", reserved: "true"},
        {id: "c2", time: "01:00"},
        {id: "c3", time: "02:00"}
      ]
    }
  }
}
</script>


<style>


input[type="checkbox"] {
    display: none;
}

input[type="checkbox"] + label {

}

input[type="checkbox"] + label span:after {
    content: "+";
}

input[type="checkbox"]:checked + label {
    background: yellow;
}

input[type="checkbox"]:checked + label span:after {
     content: "•";
}

.horizontal-booking {
    width: 100%;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    display: flex;
}

.timeline {
  display: flex;
  padding-top: 50px;
  padding-bottom: 13px;
  width: 100%;
}

.timeslot {
  background: #90b83d;
  flex: 0 0 200px;
  padding: 50px 0;
  border-right: 2px solid black;
}

.timeslot span {
  font-size:50pt;
}

.time {
  transform: translateX(-20px);
  margin: -86px -2px 0 0;
  font-family: sans-serif;
  font-weight: bold;
  color: #fff;
  background: black;
  padding: 10px;
}


.reserved {
  background: red;
}

</style>
