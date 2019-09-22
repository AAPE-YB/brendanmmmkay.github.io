// document.addEventListener('DOMContentLoaded', () =>{
//   let waypoint = new Waypoint ({
//     element: document.querySelector('animationbegin'),
//     handler:  function() {

const timeline = anime.timeline({
loop: true,
autoplay: true,
// autoplay: true,
duration: 2000,
easing: 'easeInOutSine',
});

timeline.add({
targets: '#puff',
delay: 400,
translateX: [
{
  value: [150, 85],
  duration: 900,
},
{
  value: '+=130',
  duration: 900
}
]

})
.add({
targets: '#spacer',
duration: 870,
translateX: 130,
}, '-=900')

.add({
targets: '#peakflow',
duration: 870,
translateX: [250, 130]
}, '-=900')

// .add({
// targets: '#outline',
// duration: 870,
// translateX: [110,110],
// })
//
// .add({
//   targets:'#outline',
//   delay: 173,
//   opacity: [0, 100],
// })

.add({
targets: '#outline',
translateX: [110, 110],
duration: 10,
opacity: [0, 100]
}, '+=0')

.add({
targets: '#outline path',
strokeDashoffset: [anime.setDashoffset, 0],
easing: "easeInOutCubic",
duration: 870,
delay: function(el, i) { return i * 250 },
opacity: [0, 100]
}, '+=0')

.add({
targets: '#aape',
duration: 870,
translateX: [93,93],
// translateY: [-200, 1.5]
}, '+=900')

.add({
  targets:'#aape',
  delay: 400,
  opacity: [0, 100],
})

.add({
duration: 2000,
})

// document.querySelector('.timelineplay').onclick = timeline.play;
// document.querySelector('.timelinepause').onclick = timeline.pause;

// },
// })
// })
