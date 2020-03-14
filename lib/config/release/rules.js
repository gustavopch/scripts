const major = 'major'
const minor = 'minor'
const patch = 'patch'

const dictionary = {
  ':art:': null, // 🎨
  ':zap:': patch, // ⚡️
  ':fire:': null, // 🔥
  ':bug:': patch, // 🐛
  ':ambulance:': patch, // 🚑
  ':sparkles:': minor, // ✨
  ':pencil:': null, // 📝
  ':rocket:': null, // 🚀
  ':lipstick:': minor, // 💄
  ':tada:': minor, // 🎉
  ':white_check_mark:': null, // ✅
  ':lock:': patch, // 🔒
  ':apple:': patch, // 🍎
  ':penguin:': patch, // 🐧
  ':checkered_flag:': patch, // 🏁
  ':robot:': patch, // 🤖
  ':green_apple:': patch, // 🍏
  ':bookmark:': null, // 🔖
  ':rotating_light:': null, // 🚨
  ':construction:': null, // 🚧
  ':green_heart:': null, // 💚
  ':arrow_down:': null, // ⬇️
  ':arrow_up:': null, // ⬆️
  ':pushpin:': null, // 📌
  ':construction_worker:': null, // 👷
  ':chart_with_upwards_trend:': minor, // 📈
  ':recycle:': null, // ♻️
  ':whale:': null, // 🐳
  ':heavy_plus_sign:': null, // ➕
  ':heavy_minus_sign:': null, // ➖
  ':wrench:': null, // 🔧
  ':globe_with_meridians:': minor, // 🌐
  ':pencil2:': null, // ✏️
  ':poop:': null, // 💩
  ':rewind:': minor, // ⏪
  ':twisted_rightwards_arrows:': null, // 🔀
  ':package:': null, // 📦
  ':alien:': patch, // 👽
  ':truck:': null, // 🚚
  ':page_facing_up:': null, // 📄
  ':boom:': major, // 💥
  ':bento:': minor, // 🍱
  ':ok_hand:': null, // 👌
  ':wheelchair:': minor, // ♿️
  ':bulb:': null, // 💡
  ':beers:': null, // 🍻
  ':speech_balloon:': minor, // 💬
  ':card_file_box:': minor, // 🗃
  ':loud_sound:': patch, // 🔊
  ':mute:': patch, // 🔇
  ':busts_in_silhouette:': null, // 👥
  ':children_crossing:': minor, // 🚸
  ':building_construction:': null, // 🏗
  ':iphone:': minor, // 📱
  ':clown_face:': null, // 🤡
  ':egg:': minor, // 🥚
  ':see_no_evil:': null, // 🙈
  ':camera_flash:': null, // 📸
  ':alembic:': null, // ⚗
  ':mag:': minor, // 🔍
  ':wheel_of_dharma:': null, // ☸️
  ':label:': null, // 🏷️
  ':seedling:': null, // 🌱
  ':triangular_flag_on_post:': minor, // 🚩
  ':goal_net:': patch, // 🥅
  ':dizzy:': minor, // 💫
  ':wastebasket:': minor, // 🗑
}

const getCodesFor = type => {
  return Object.entries(dictionary)
    .filter(([key, value]) => value === type)
    .map(([key, value]) => key)
}

const majorGitmojiCodes = getCodesFor(major)
const minorGitmojiCodes = getCodesFor(minor)
const patchGitmojiCodes = getCodesFor(patch)

module.exports = {
  majorGitmojiCodes,
  minorGitmojiCodes,
  patchGitmojiCodes,
}
