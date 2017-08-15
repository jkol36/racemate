const preset = {
    race_criteria: {
      race_distance: {
        min: 100,
        max: 1000
      },
      condition_class:'Benchmark 65' ,
      condition_age: '2yo',
      condition_sex: '',
      condition_weight: 'Set weight with penalties',
      condition_jockey: true,
      prize_first: 3000
      prize_second: 3000,
      prize_third: 3000,
      race_starters: 7,
      venue_state: '',
      venue_name: 'Gore',
      race_min_hcp_weight:54,
      meeting_is_night: false
    },
    horse_criteria: {
      horse_barrier_draw: 6,
      horse_sex: 'G', //stands for Gelding check horseSexLookup
      horse_won: '',
      horse_weight: 50


    }
}

//im going to create two presets, 1 preset is going to be used
// to compare against our data, and the second preset is going to be,
// just for display purposes.
const presetKeyToText = {
  race_distance: 'Race Distance',
  condition_class: 'Race Class',
  condition_age: 'Race Age',
  condition_sex: 'Race Sex',
  condition_weight: 'Race Weight Is',
  condition_jockey: 'Apprentices Can Claim',
  prize_1st: 'First prize is or above',
  prize_2nd: 'Second prize is or above',
  prize_3rd: 'Third prize is or above',
  race_starters: 'Race Starters is or above',
  venue_state: 'Race is in State',
  venue_name: 'Race is at track',
  race_min_hcp_weight: 'Race minimum handicap weight is',
  meeting_is_night: 'Race meeting is a night meeting'
}

