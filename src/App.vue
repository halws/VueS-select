<template>
  <div id="app">
    <div class="input uk-inline">
    <span class="uk-input" v-if="spanShowed" @click="focusInput">{{spanText}}</span>
      <input 
       v-else
       ref="inputField"
       v-model='filtered'
       @focusin="focusIn"
       @focusout="focusOut"
       class="uk-input" 
       placeholder="Type to filter">
    </div>
    <div class="sub-menu">
      <ul class="uk-list" :class="{show:submenuShowed}">
      <li v-for="country in filterCoutries" @click="changeText(country)">{{country}}</li>
    </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      countries: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
    ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
    ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
    ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
    ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
    ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
    ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
    ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
    ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
    ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
    ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
    ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
    ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
    ,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
    ,"Yemen","Zambia","Zimbabwe"],
      filtered:'',
      submenuShowed:false,
      spanShowed:true,
      spanText:"Select country"
    }
  },
  updated(){
        if (!this.spanShowed) {
          var input =  this.$refs.inputField;   
          input.focus();      
}
  },
  computed:{
    filterCoutries(){
      return this.countries.filter((element)=>{
        return element.toLowerCase().match(this.filtered.toLowerCase());
      });
    }
  },
  methods:{
    focusIn(){
      console.log("focusIn");
      this.submenuShowed=true;
    },
    focusOut(){
      console.log("focusOut");
      this.spanShowed=true;
      this.submenuShowed=false;
      if (this.filtered=='') {
        this.spanText = 'Select country';
      }
    },
    focusInput(){
      this.spanShowed=false;
    },
    changeText(text){
      this.filtered = text;
      this.spanText = text;
    }
  }
}
</script>

<style>
#app {
 height: 100vh;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
  color: #2c3e50;
}
.input,ul,span{
  width: 20%;
}
.sub-menu{
  width: 20%;
  position: relative;
}
ul {
  width: 100%;
  max-height: 200px;
  overflow: auto;
  text-align: center;
  list-style-type: none;
  padding: 0;
  position: absolute;
  top: 100%;
  visibility:hidden;
  opacity: 0;
  transition:all 0.3s linear;
}
ul.show{
  opacity: 1;
  visibility: visible;
}
span,li{
  cursor: pointer;
}
li {
  margin: 0 !important;
  border: .5px solid #666;
  border-top: 0;
}
li:hover{
  background-color: #ccc;
}
li:first-child{
  border-top: .5px solid #666;
}

</style>
