'use client'

import { useState } from 'react'

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [selectedVersion, setSelectedVersion] = useState<'basic' | 'advanced' | 'ultra'>('advanced')

  const prompts = {
    basic: `A cinematic sequence in a grand cathedral resembling St Peter's Basilica. Camera positioned behind a priest in ornate vestments at the altar. He raises the Eucharist with both hands. Slow zoom toward the elevated host as the background transforms: baroque architecture morphs into a dramatic vision of Christ crucified on a mountaintop, divine light breaking through storm clouds, lightning strikes, women weeping at the foot of the cross. Christ's face visible, expressing profound suffering. Solemn atmosphere. Camera pulls back to reveal the priest in the church. Hyperrealistic, 70mm IMAX, anamorphic lens, shallow depth of field.`,

    advanced: `OPENING SHOT: Wide establishing shot inside a vast cathedral modeled after St Peter's Basilica. Soaring columns, ornate baroque details, shafts of colored light through stained glass. Camera positioned 15 feet behind priest in gold-trimmed chasuble.

ACT 1 - THE ELEVATION (0:00-0:08):
Priest raises the consecrated Eucharist with both hands above his head. Camera begins slow dolly-in combined with gradual zoom (Hitchcock vertigo effect). Focus on the white host against golden monstrance.

ACT 2 - THE TRANSFIGURATION (0:08-0:20):
As camera continues pushing in, the ornate church architecture begins to dissolve and morph. Marble columns fade into rocky mountainside. Gilded ceiling transforms into turbulent storm clouds with volumetric lightning. The space itself warps - reality bending like Nolan's "Inception."

ACT 3 - THE CRUCIFIXION VISION (0:20-0:35):
Full reveal: Christ on the cross atop Golgotha. CRUCIAL DETAILS:
- Christ's face clearly visible, tilted forward, eyes half-closed, expression of profound agony and divine peace
- Crown of thorns, blood on forehead
- Three women at the base (Mary in blue veil, Mary Magdalene, another Mary) - faces wet with tears, hands clasped in prayer
- Dramatic side lighting (Caravaggio style) - single divine light source breaking through storm clouds from upper left
- Thunder rolling, lightning forking across purple-black sky
- Rough wooden cross, weathered texture
- Rocky mountain terrain, scattered stones
- Atmospheric perspective - misty distance

CINEMATOGRAPHY:
- Shot on 70mm IMAX film stock
- Anamorphic lens flares during divine light moments
- Shallow depth of field (f/2.8) with focus pull from Eucharist to Christ's face
- Desaturated color palette except for divine golden light
- Practical smoke/fog effects
- Camera movement: steady, reverent, no handheld shake

ACT 4 - THE RETURN (0:35-0:45):
Reverse zoom-out. The vision slowly dissolves back into church architecture. Camera pulls back to original position. Priest lowers the Eucharist, turns slightly toward congregation (us). His face shows spiritual transformation - tears on cheeks, expression of awe.

AUDIO NOTES:
- Deep Gregorian chant echoing
- Hans Zimmer-style organs building
- Thunder and wind during crucifixion
- Return to quiet church ambience

TECHNICAL SPECS:
- 24fps for cinema feel
- 2.39:1 aspect ratio (anamorphic)
- Photorealistic CGI blended with practical effects
- Color grading: cool blues in church, warm golds in vision
- Lens: Panavision anamorphic
- Christopher Nolan visual style: practical effects priority, time manipulation, architectural grandeur, emotional weight`,

    ultra: `MASTER PROMPT FOR AI VIDEO GENERATION - CHRISTOPHER NOLAN CINEMATIC STYLE
Documentary Short Film Sequence: "The Transubstantiation Vision"

═══════════════════════════════════════════════════════════════

TECHNICAL SPECIFICATIONS:
→ Format: 70mm IMAX Digital / 2.39:1 Anamorphic
→ Frame Rate: 24fps (cinematic)
→ Duration: 45-60 seconds
→ Camera: Panavision Ultra Panatar Anamorphic lenses
→ Film Stock Emulation: Kodak Vision3 500T 5219
→ Color Science: ACES workflow, Nolan-esque desaturation
→ Lighting: Practical sources, motivated by environment
→ VFX: Seamless blend of practical and digital (ILM-quality)

═══════════════════════════════════════════════════════════════

SEQUENCE BREAKDOWN:

[SHOT 1: ESTABLISHMENT - 0:00 to 0:06]
CAMERA POSITION:
- 18 feet behind priest, mounted on fluid head dolly
- Height: 5.5 feet (eye level with priest's shoulders)
- Lens: 50mm anamorphic, aperture f/2.8

VISUAL DESCRIPTION:
Interior of grand cathedral - architectural cross between St Peter's Basilica and Nolan's "Tenet" sacred spaces. Key elements:
- Soaring ribbed vault ceiling, 150+ feet high
- Travertine marble columns with Corinthian capitals
- Bernini-style altar with bronze canopy (baldachin)
- Stained glass windows casting amber/sapphire light shafts
- Haze/particulate in air (volumetric atmosphere)
- 200+ candles providing warm practical lighting
- Empty pews stretching into atmospheric darkness

PRIEST:
- White alb with ornate gold chasuble (liturgical vestments)
- Back to camera (we see shoulder blades, neck, head from behind)
- Arms raising upward in elevation gesture
- Holding golden monstrance containing white Eucharist host

CAMERA MOVEMENT:
- Begin static for 2 seconds
- Slow push-in on dolly track (0.5 feet/second)
- Simultaneous subtle zoom (25% over duration)
- Combined dolly/zoom creates "Vertigo effect" - space compresses

LIGHTING:
- Key: Overhead chandeliers and altar candles (warm 2700K)
- Fill: Diffused stained glass window light (mixed 4500K)
- Rim: Single shaft of "divine light" from upper right
- Fog/haze density: Medium (visibility 60 feet)

COLOR PALETTE:
- Dominant: Deep blues, burgundy reds, bronze golds
- Shadows: Crushed blacks (Nolan signature)
- Highlights: Soft rolloff, no clipping

AUDIO:
- Ambience: Cathedral reverb (4.2 second decay)
- Gregorian chant (low male voices, ethereal)
- Subtle organ sustain (low frequency rumble)

[SHOT 2: THE MORPHING TRANSITION - 0:06 to 0:18]
CAMERA MOVEMENT CONTINUES:
- Accelerated push-in (now 1.2 feet/second)
- Focus shift from priest to Eucharist host
- Zoom intensifies (creates optical distortion)

TRANSFORMATION SEQUENCE (HIGHLY DETAILED):
This is the key technical challenge - gradual morphing of architecture:

Phase 1 (0:06-0:10) - Dissolution:
- Marble columns begin to phase/flicker (like "Interstellar" tesseract)
- Edges of architecture become transparent (70% opacity)
- Vaulted ceiling starts to crack and fragment
- Stained glass windows shatter in slow motion (glass particles hang suspended)
- Colors bleed and streak (motion blur effect)
- Spatial geometry warps (non-Euclidean distortion)

Phase 2 (0:10-0:14) - Transition:
- Church elements fade to 30% opacity
- Rocky mountain terrain fades in (overlaid)
- Sky becomes visible through dissolving ceiling
- Storm clouds materialize (volumetric rendering)
- Candlelight becomes divine light beam
- Altar transforms into rocky outcrop
- Sense of dimensional shifting (Nolan's "Inception" hallway rotation)

Phase 3 (0:14-0:18) - Revelation:
- Church architecture completely dissolved (ghost traces remain 10% opacity)
- Full exterior mountain environment revealed
- Storm intensity increases
- Lightning begins to flash
- The cross becomes fully visible

VFX NOTES:
- Use particle systems for dust/debris during transition
- Implement heat distortion effects
- Add anamorphic lens flares during bright flashes
- Maintain realistic physics even in surreal transformation
- NO cartoon/fantasy effects - keep photorealistic

[SHOT 3: THE CRUCIFIXION VISION - 0:18 to 0:38]
ENVIRONMENT:
Location: Mount Golgotha (historically accurate)
- Rocky limestone terrain, tan/beige coloration
- Sparse dried vegetation (thorns, dead branches)
- Scattered stones and boulders
- Elevation: depicted as high point overlooking distant city
- Time: 3 PM ("the ninth hour" - biblical timing)
- Weather: Severe thunderstorm, supernatural darkness

SKY:
- Roiling storm clouds: purple-black with green undertones
- Multiple lightning strikes (both cloud-to-cloud and cloud-to-ground)
- Volumetric god rays breaking through cloud gaps
- Single beam of divine light (warm 5500K) from upper left at 45° angle
- Dust/rain particles visible in light shafts
- Atmospheric perspective: hazy layers receding to horizon

THE CROSS:
- Rough-hewn timber, weathered and splintered
- Height: 12 feet from ground to top
- Width: 8 feet (crossbeam)
- Realistic carpentry: visible adze marks, knots in wood
- Dark staining (blood) running down vertical beam
- Planted in rocky socket with support stones

CHRIST - HYPER-DETAILED:
This is the emotional center - must be executed perfectly:

BODY:
- Anatomically accurate male figure, lean/athletic build
- Age: approximately 33 years
- Skin tone: Middle Eastern (olive, weathered by sun)
- Minimal clothing: white loincloth (torn, bloodstained)
- Crucifixion posture: Arms spread at 70° angle, knees slightly bent
- Wounds: Iron nails through wrists (anatomically correct) and feet
- Blood flow: Realistic dripping patterns from wounds
- Ribcage: Visible through skin (indicating labored breathing)
- Spear wound in right side (blood and water)

FACE - CRITICAL FOCAL POINT:
- Head tilted forward approximately 30° (toward right shoulder)
- Eyes: Half-open, glazed, looking downward
- Expression: Combination of physical agony and spiritual peace
- Brow: Furrowed in pain
- Mouth: Slightly open (difficult breathing)
- Beard: Dark brown, matted with blood and sweat
- Hair: Shoulder-length, dark, wet, clinging to face
- Crown of thorns: Woven branches, embedded in scalp
- Blood: Running from puncture wounds down forehead, temples, into beard
- Sweat: Mixed with blood and rain
- Lighting on face: Divine beam hitting from left, creating dramatic chiaroscuro
- Skin texture: Hyper-realistic pores, stubble, weathering
- NO idealized beauty - show the suffering
- Convey: Dignity, sacrifice, human vulnerability, divine purpose

REFERENCE STYLE:
- Caravaggio's "The Entombment"
- Mel Gibson's "The Passion of the Christ" (realism level)
- Rembrandt's crucifixion paintings (lighting)
- Medical/anatomical accuracy

THE THREE WOMEN AT THE BASE:
Positioned at foot of cross, 6-8 feet from base:

WOMAN 1 - MARY (Mother):
- Age: 50s
- Position: Center, closest to cross, kneeling
- Clothing: Deep blue hooded veil (traditional iconography), brown robe
- Face: Mediterranean features, weathered, tear-streaked
- Expression: Profound grief but composed
- Hands: Clasped in prayer, pressed to chest
- Eyes: Looking up at Christ's face
- Body language: Slight forward lean, protective maternal instinct

WOMAN 2 - MARY MAGDALENE:
- Age: 30s
- Position: Left side, kneeling
- Clothing: Dark red/burgundy robe, hair partially covered
- Face: Younger, beautiful in anguish
- Expression: Active weeping, mouth open in silent cry
- Hands: Reaching toward cross (but not touching)
- Eyes: Reddened from tears
- Hair: Dark brown, some strands loose and wind-blown
- Body language: Leaning forward, emotional abandon

WOMAN 3 - MARY (wife of Clopas):
- Age: 40s
- Position: Right side, standing but hunched
- Clothing: Gray/tan hooded cloak
- Face: Worn by grief
- Expression: Stoic suffering, lips pressed tight
- Hands: One hand supporting Mary (mother), other clutching own robe
- Eyes: Downcast
- Body language: Supportive, steadying presence

WOMEN - TECHNICAL DETAILS:
- All faces clearly visible (proper lighting)
- Realistic tears: Tracks on dirty cheeks, not clean streaks
- Rain mixing with tears
- Clothing: Heavy, wet fabric clinging to forms
- Hair: Wet, stringy, disheveled by wind
- Muddy knees and hands from kneeling on ground
- Emotional authenticity: NOT theatrical, deeply human

LIGHTING SETUP FOR CRUCIFIXION:
Primary: Single divine light source (upper left, 45°)
- Quality: Hard-edged beam breaking through storm
- Color: Warm golden 5500K with slight amber gel
- Intensity: High contrast ratio (8:1)
- Coverage: Focused on Christ's face and upper body, spilling onto Mary

Secondary: Ambient storm light
- Quality: Soft, diffused
- Color: Cool blue-gray 6500K
- Intensity: Low, fills shadows
- Coverage: Overall scene

Accent: Lightning flashes (practical strobe effects)
- Duration: 0.1 second bursts
- Color: Blue-white 8000K
- Timing: Random intervals, 3-5 times during shot
- Effect: Brief full illumination, harsh shadows

CAMERA MOVEMENT:
- 0:18-0:25: Hold on wide shot (cross fully in frame)
- 0:25-0:32: Slow push toward Christ's face (focus shift)
- 0:32-0:38: Close-up of face (hold for emotional beat)
- Movement: Fluid, reverent, no shake
- Axis: Slight arc from right to center (5° pan)

WEATHER EFFECTS:
- Rain: Diagonal streaks (wind-driven), medium density
- Wind: Clothing and hair movement, 15-20 mph gusts
- Thunder: Deep rumbling, Dolby Atmos low frequency
- Lightning: Forked patterns, realistic electrical discharge
- Dust/mist: Particulate in air, reduced visibility (atmospheric depth)

COLOR GRADING - CRUCIFIXION SCENE:
- Overall: Desaturated (70% saturation)
- Blacks: Crushed in shadows
- Highlights: Warm push in divine light areas
- Skin tones: Preserve realism despite color shifts
- Sky: Deep purple with green storm undertones
- Cross: Rich wood browns, darkened by wet
- Divine light: Isolated color treatment (warmer than rest)

EMOTIONAL TONE:
- Solemn reverence
- Historical weight
- Spiritual transcendence within brutal reality
- NOT sanitized or pretty - raw and real
- Silence speaks (minimal movement except weather)

AUDIO:
- Thunder: Low frequency rumble (40-80 Hz)
- Lightning: Sharp crack followed by rumble
- Wind: Howling, whistling around cross
- Rain: Pattering on rocks
- Distant city sounds: Muffled chaos
- Music: Hans Zimmer style - single low cello note sustained, building tension
- Women's weeping: Subtle, not overpowering

[SHOT 4: THE RETURN - 0:38 to 0:48]
REVERSE TRANSFORMATION:
Mirror the morphing sequence in reverse:

Phase 1 (0:38-0:42) - Dissolution of vision:
- Crucifixion scene begins to fade (100% to 70% opacity)
- Storm sounds decrease in volume
- Divine light flares bright (anamorphic flare)
- Mountain environment becomes translucent
- Church architecture fades in (ghosted at first)

Phase 2 (0:42-0:45) - Reconstruction:
- Cathedral walls, columns materialize
- Ceiling reforms overhead
- Stained glass windows return
- Storm becomes filtered window light
- Sound shifts back to church reverb

Phase 3 (0:45-0:48) - Full return:
- Complete church environment restored
- Vision traces fully dissolved
- Normal cathedral lighting
- Priest completing gesture

CAMERA MOVEMENT:
- Reverse zoom and dolly (pulling back)
- Return to original position 18 feet behind priest
- Focus shifts from Eucharist back to full scene

PRIEST'S REACTION:
- Slowly lowers the Eucharist
- Shoulders show deep breath (moment of processing)
- Slight turn toward camera (partial profile now visible)
- We see side of his face: tear track on cheek, eyes glistening
- Expression: Awe, transformed, spiritually moved
- Movement: Deliberate, weighted by experience
- Age: 50s, weathered face, kind eyes
- NOT theatrical - quiet, profound moment

FINAL FRAME (0:48-0:50):
- Static shot for 2 seconds
- Priest in profile, holding Eucharist at chest level
- Cathedral restored to full reality
- Ambient church sounds return fully
- Fade to black (2 second gradual fade)

AUDIO - FINAL MOMENTS:
- Gregorian chant returns (higher pitch, hopeful)
- Organ swell (major chord resolution)
- Cathedral ambience (candle flickers, distant footsteps)
- Priest's breath (subtle, intimate)
- Final thunder rumble (distant, fading to silence)

═══════════════════════════════════════════════════════════════

CHRISTOPHER NOLAN STYLE ELEMENTS:

1. PRACTICAL EFFECTS PRIORITY
- Real cathedral location (not green screen)
- Practical lighting (candlelight, actual fog)
- Physical props and sets where possible
- CGI only for impossible elements (transformation, storm)

2. TIME MANIPULATION
- Slow motion during key moments (elevation, lightning)
- Compressed time (transformation feels timeless)
- Precise editing rhythm (builds tension)

3. ARCHITECTURAL GRANDEUR
- Massive scale, emphasis on human smallness
- Geometric perfection in cathedral design
- Vertical lines drawing eye upward
- Space as character in itself

4. EMOTIONAL WEIGHT WITHOUT SENTIMENTALITY
- Restrained performances
- Silence and stillness convey more than dialogue
- Trust audience intelligence
- Avoid musical manipulation (score supports, doesn't dictate)

5. SCIENTIFIC/TECHNICAL ACCURACY
- Research proper liturgical actions
- Anatomically correct crucifixion
- Realistic storm meteorology
- Period-accurate clothing and props

6. IMAX SENSIBILITY
- Composed for large format
- Deep focus where appropriate
- Layers of detail (foreground/midground/background)
- Sound design as immersive as visuals

7. INTELLECTUAL DEPTH
- Visual metaphor (transubstantiation made literal)
- Thematic resonance (faith, sacrifice, transformation)
- Not explaining - showing
- Trust the image to communicate

8. COLOR PALETTE
- Desaturated realism (not monochrome)
- Strategic color accents (divine light, blood)
- Cool shadows, warm highlights
- Contrast serves story (church vs. vision)

9. CAMERA DISCIPLINE
- Motivated movements only
- No showy techniques for their own sake
- Serve the emotion and story
- Steady, controlled, precise

10. SOUND DESIGN
- Prioritize low frequency (subwoofer)
- Silence as powerful as noise
- Layered ambient textures
- Realistic acoustics for each space

═══════════════════════════════════════════════════════════════

REFERENCE MATERIALS TO STUDY:

NOLAN FILMS:
- "Dunkirk" - church scene intensity, practical scale
- "Interstellar" - dimensional shifting visuals, emotional restraint
- "The Prestige" - transformation sequences
- "Inception" - reality-bending architecture
- "Tenet" - sacred space cinematography

OTHER VISUAL REFERENCES:
- Roger Deakins' church lighting ("1917")
- Emmanuel Lubezki's natural light work
- Caravaggio paintings (chiaroscuro)
- Rembrandt's religious works (face lighting)
- Terrence Malick's "The Tree of Life" (spiritual imagery)
- Andrei Tarkovsky's "Andrei Rublev" (religious authenticity)

CRUCIFIXION REFERENCES:
- Matthias Grünewald's Isenheim Altarpiece (raw suffering)
- Diego Velázquez "Christ Crucified" (dignity in agony)
- Medical documentation of crucifixion effects
- Biblical Gospel accounts (Matthew 27, Mark 15, Luke 23, John 19)

═══════════════════════════════════════════════════════════════

AI GENERATION PARAMETERS:

STYLE TAGS:
cinematic, photorealistic, 70mm IMAX, anamorphic lens, Christopher Nolan style, practical effects, volumetric lighting, atmospheric, dramatic, reverent, historical accuracy, chiaroscuro lighting, Caravaggio inspired, Hans Zimmer score aesthetic, architectural grandeur, spiritual transcendence, documentary realism

NEGATIVE PROMPTS (AVOID):
cartoon, anime, CGI video game look, oversaturated colors, lens distortion artifacts, visible green screen, theatrical staging, pretty/sanitized violence, idealized faces, generic stock footage look, handheld shakiness, dutch angles, unmotivated camera movement, melodramatic, kitschy religious art style, glowing halos, fantasy elements, anime eyes, plastic skin texture

QUALITY SETTINGS:
- Resolution: 4K minimum (8K preferred)
- Bitrate: Highest available
- Motion blur: Natural (180° shutter)
- Detail level: Maximum
- Realism: Photographic
- Temporal consistency: High (no flickering between frames)

SHOT PRIORITY HIERARCHY:
1. Christ's face (most important - get this right)
2. Women's expressions (emotional anchor)
3. Transformation sequence (technical showcase)
4. Priest's final reaction (emotional resolution)
5. Cathedral atmosphere (establishing mood)

═══════════════════════════════════════════════════════════════

FINAL NOTES FOR AI VIDEO GENERATOR:

This sequence requires:
- Sophisticated morphing/transformation VFX
- High-quality human face generation (avoid uncanny valley)
- Realistic fabric and hair simulation
- Volumetric lighting and atmospheric effects
- Temporal coherence across all 45-60 seconds
- Precise camera movement simulation
- Multi-layered audio design

If the AI system has limitations:
- Prioritize the crucifixion vision sequence (shot 3)
- Focus quality on human faces over environment
- Simplify transformation if needed, but keep it smooth
- Ensure emotional authenticity over technical perfection

The goal is a piece that could exist in a Christopher Nolan documentary -
treating religious subject matter with intellectual respect, visual grandeur,
technical excellence, and emotional depth without sentimentality.`
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompts[selectedVersion])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
            Cinematic AI Prompt Generator
          </h1>
          <p className="text-xl text-gray-400">Christopher Nolan-esque Documentary Film Prompts</p>
          <p className="text-sm text-gray-500 mt-2">For DesignArena AI Video Generator</p>
        </div>

        {/* Scene Description */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-3 text-amber-400">Your Scene:</h2>
          <p className="text-gray-300 leading-relaxed">
            A priest offering Mass in St. Peter's Basilica-inspired cathedral. During the Elevation of the Eucharist,
            the camera zooms and pans as reality transforms - the church architecture dissolves into a vivid gothic
            crucifixion scene atop Golgotha. Christ hangs on the cross in divine light, face visible and solemn,
            surrounded by weeping women. Thunder and lightning crack across the sky. The scene then zooms back out,
            returning to the church with the transformed priest.
          </p>
        </div>

        {/* Prompt Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-200">Select Prompt Complexity:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setSelectedVersion('basic')}
              className={`p-6 rounded-lg border-2 transition-all ${
                selectedVersion === 'basic'
                  ? 'border-amber-500 bg-amber-500/10'
                  : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
              }`}
            >
              <div className="text-lg font-semibold mb-2">Basic</div>
              <div className="text-sm text-gray-400">
                Concise prompt with essential details (~150 words)
              </div>
            </button>

            <button
              onClick={() => setSelectedVersion('advanced')}
              className={`p-6 rounded-lg border-2 transition-all ${
                selectedVersion === 'advanced'
                  ? 'border-amber-500 bg-amber-500/10'
                  : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
              }`}
            >
              <div className="text-lg font-semibold mb-2">Advanced</div>
              <div className="text-sm text-gray-400">
                Detailed with cinematography specs (~500 words)
              </div>
            </button>

            <button
              onClick={() => setSelectedVersion('ultra')}
              className={`p-6 rounded-lg border-2 transition-all ${
                selectedVersion === 'ultra'
                  ? 'border-amber-500 bg-amber-500/10'
                  : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
              }`}
            >
              <div className="text-lg font-semibold mb-2">Ultra Detailed</div>
              <div className="text-sm text-gray-400">
                Professional-grade master prompt (~3000 words)
              </div>
            </button>
          </div>
        </div>

        {/* Generated Prompt Display */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden backdrop-blur-sm">
          <div className="bg-gradient-to-r from-amber-900/50 to-yellow-900/50 px-6 py-4 flex justify-between items-center border-b border-gray-700">
            <h3 className="text-xl font-semibold text-amber-300">
              {selectedVersion === 'basic' && 'Basic Prompt'}
              {selectedVersion === 'advanced' && 'Advanced Prompt'}
              {selectedVersion === 'ultra' && 'Ultra Detailed Master Prompt'}
            </h3>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors flex items-center gap-2 font-medium"
            >
              {copied ? (
                <>
                  <span>✓</span>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <span>📋</span>
                  <span>Copy Prompt</span>
                </>
              )}
            </button>
          </div>

          <div className="p-6">
            <pre className="whitespace-pre-wrap font-mono text-sm text-gray-300 leading-relaxed">
              {prompts[selectedVersion]}
            </pre>
          </div>

          <div className="bg-gray-900/50 px-6 py-4 border-t border-gray-700">
            <div className="text-sm text-gray-400">
              Word count: {prompts[selectedVersion].split(/\s+/).length} words
            </div>
          </div>
        </div>

        {/* Usage Tips */}
        <div className="mt-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">💡 Usage Tips:</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              <span><strong>Basic:</strong> Best for AI generators with token limits or quick iterations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              <span><strong>Advanced:</strong> Ideal for most professional AI video tools with cinematography controls</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              <span><strong>Ultra:</strong> Maximum detail for premium AI systems or as a reference document for manual tweaking</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              <span>You can edit the prompt after copying to customize specific elements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              <span>The Ultra version includes negative prompts and technical specifications</span>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Created for documentary filmmakers seeking Christopher Nolan-style cinematography</p>
          <p className="mt-2">Optimized for DesignArena AI Video Generator</p>
        </div>
      </div>
    </div>
  )
}
