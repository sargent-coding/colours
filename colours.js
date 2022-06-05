class HEX {
  constructor(input) {
    if (input.constructor.name == "HEX") {
    	this.value = input.value
    } else if (input.constructor.name == "String") {
      this.value = input
    } else if (input.constructor.name == "RGBA") {
      this.value = "#" + Math.round(input.r).toString(16).padStart(2, "0") + Math.round(input.g).toString(16).padStart(2, "0") + Math.round(input.b).toString(16).padStart(2, "0") + Math.round((input.a || 1) * 255).toString(16).padStart(2, "0")
    } else if (input.constructor.name == "HSLA") {
      this.value = new HEX(new RGBA(input)).value
    }
  }
}

class RGBA {  
  constructor(r, g, b, a) {
  	if (r.constructor.name == "RGBA") {
    	this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a || 1
    } else if (r.constructor.name == "Number") {
    	this.r = r, this.g = g, this.b = b, this.a = a || 1
    } else if (r.constructor.name == "HEX") {
      let hex = r.value.replace("#", "").replace("0x", "")
      if (hex.length == 3 || hex.length == 4) this.r = parseInt(hex[0] + hex[0], 16), this.g = parseInt(hex[1] + hex[1], 16), this.b = parseInt(hex[2] + hex[2], 16), this.a = (parseInt(hex[3] + hex[3], 16)) / 255 || 1
      else if (hex.length == 6 || hex.length == 8) this.r = parseInt(hex.slice(0, 2), 16), this.g = parseInt(hex.slice(2, 4), 16), this.b = parseInt(hex.slice(4, 6), 16), this.a = (parseInt(hex.slice(6, 8), 16)) / 255 || 1
    } else if (r.constructor.name == "HSLA") {
  		let h = r.h, s = r.s / 100, l = r.l / 100, a = r.a
      
      let chroma = (1 - Math.abs(2 * l - 1)) * s, mid = chroma * (1 - Math.abs((h / 60) % 2 - 1)), match = l - chroma / 2

      if (0 <= h && h < 60) this.r = chroma, this.g = mid, this.b = 0
      else if (60 <= h && h < 120) this.r = mid, this.g = chroma, this.b = 0
      else if (120 <= h && h < 180) this.r = 0, this.g = chroma, this.b = mid
      else if (180 <= h && h < 240) this.r = 0, this.g = mid, this.b = chroma
      else if (240 <= h && h < 300) this.r = mid, this.g = 0, this.b = chroma
      else if (300 <= h && h < 360) this.r = chroma, this.g = 0, this.b = mid

      this.r = (this.r + match) * 255, this.g = (this.g + match) * 255, this.b = (this.b + match) * 255, this.a = a
  	}
  }
  
  get value() {
  	return `rgba(${this.r}, ${this.g}, ${this.b}${this.a == 1 ? "" : ", " + this.a})`
  }
}

class HSLA {
  constructor(h, s, l, a = 1) {
    if (h.constructor.name == "HSLA") {
    	this.h = h.h, this.s = h.s, this.l = h.l, this.a = h.a || 1
    } else if (h.constructor.name == "Number") {
    	this.h = h, this.s = s, this.l = l, this.a = a || 1
    } else if (h.constructor.name == "RGBA" || h.constructor.name == "HEX") {
      if (h.constructor.name == "HEX") h = new RGBA(h)
    
      let r = h.r / 255, g = h.g / 255, b = h.b / 255, a = h.a || 1
      let min = Math.min(r, g, b), max = Math.max(r, g, b), mid = max - min
      this.h = Math.round(((mid == 0) ? 0 : (max == r) ? ((g - b) / mid) % 6 : (max == g) ? (b - r) / mid + 2 : (r - g) / mid + 4) * 60)
      if (this.h < 0) this.h += 360
      this.s = +((mid == 0 ? 0 : mid / (1 - Math.abs(2 * ((max + min) / 2) - 1))) * 100).toFixed(4), this.l = +(((max + min) / 2) * 100).toFixed(4), this.a = a
    }
  }
  
  get value() {
  	return `hsla(${this.h}, ${this.s}%, ${this.l}%${this.a == 1 ? "" : ", " + this.a})`
  }
}
