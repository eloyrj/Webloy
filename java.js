const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
  
    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime
    }
  };
  
  const countdown = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);
  
    const timerUpdate = setInterval( () => {
      let t = getRemainingTime(deadline);
      el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
  
      if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
      }
  
    }, 1000)
  };
  
<<<<<<< HEAD
<<<<<<< HEAD
  countdown('jul 1 2020 10:00:00 GMT+0100', 'clock', '¡Ya empezó!');
  
=======
  countdown('jun 31 2020 00:00:00 GMT+0100', 'clock', '¡Ya empezó!');
  
>>>>>>> 3c947d5e064b5dc7781fe8c3138ce6f8e5556901
=======

>>>>>>> e6b4fb4aa4660714d68f1b6e278157064c7bb8fb
