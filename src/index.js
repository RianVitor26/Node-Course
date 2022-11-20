const os = require('os')
const cpus = os.cpus()
cpus.map(cpu => {
  if (cpu.speed > 2000) {
    console.log("Good speed")
  } else {
    console.log("Bad speedd")
  }
})


