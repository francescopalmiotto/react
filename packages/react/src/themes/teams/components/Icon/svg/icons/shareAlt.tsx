import * as React from 'react'
import cx from 'classnames'
import { TeamsProcessedSvgIconSpec } from '../types'
import { teamsIconClassNames } from '../teamsIconClassNames'

export default {
  icon: ({ classes }) => (
    <svg viewBox="0 0 32 32" role="presentation" className={classes.svg}>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path
          d="M22.4648438,8.1953125c0.3046875,0.1303711,0.5712891,0.3100586,0.8007812,0.5390625
            c0.2294922,0.2294922,0.4091797,0.4960938,0.5390625,0.8007812S24,10.1616211,24,10.5
            c0,0.3388672-0.0654297,0.6591797-0.1953125,0.9609375c-0.1298828,0.3022461-0.3095703,0.5678711-0.5390625,0.796875
            c-0.234375,0.234375-0.5029297,0.4169922-0.8046875,0.546875C22.1591797,12.9350586,21.8388672,13,21.5,13
            c-0.390625,0-0.765625-0.0922852-1.125-0.2773438c-0.359375-0.1845703-0.65625-0.4360352-0.890625-0.7539062l-6.5546875,2.9765625
            C12.9765625,15.1225586,13,15.3076172,13,15.5c0,0.2138672-0.0390625,0.4560547-0.1171875,0.7265625l6.71875,3.6640625
            c0.234375-0.28125,0.5185547-0.5,0.8515625-0.65625S21.1357422,19,21.5,19c0.3388672,0,0.6601562,0.0654297,0.9648438,0.1953125
            c0.3046875,0.1308594,0.5712891,0.3105469,0.8007812,0.5390625c0.2294922,0.2294922,0.4091797,0.4960938,0.5390625,0.8007812
            S24,21.1621094,24,21.5c0,0.3388672-0.0654297,0.6591797-0.1953125,0.9609375
            c-0.1298828,0.3027344-0.3095703,0.5683594-0.5390625,0.796875c-0.234375,0.234375-0.5029297,0.4169922-0.8046875,0.546875
            C22.1591797,23.9355469,21.8388672,24,21.5,24c-0.3330078,0-0.6513672-0.0644531-0.953125-0.1953125
            c-0.3017578-0.1298828-0.5703125-0.3125-0.8046875-0.546875s-0.4169922-0.5019531-0.546875-0.8046875
            C19.0654297,22.1513672,19,21.8339844,19,21.5c0-0.2128906,0.0390625-0.4550781,0.1171875-0.7265625l-6.71875-3.6640625
            c-0.234375,0.28125-0.5185547,0.5-0.8515625,0.65625C11.2133789,17.921875,10.8642578,18,10.5,18
            c-0.3334961,0-0.6513672-0.0649414-0.953125-0.1953125c-0.3022461-0.1298828-0.5703125-0.3125-0.8046875-0.546875
            s-0.4169922-0.5024414-0.546875-0.8046875C8.0649414,16.1513672,8,15.8334961,8,15.5
            c0-0.3383789,0.0649414-0.6586914,0.1953125-0.9609375c0.1298828-0.3017578,0.3125-0.5703125,0.546875-0.8046875
            c0.2290039-0.2290039,0.4946289-0.4086914,0.796875-0.5390625C9.8408203,13.0654297,10.1611328,13,10.5,13
            c0.390625,0,0.765625,0.0927734,1.125,0.2773438c0.359375,0.1850586,0.65625,0.4365234,0.890625,0.7539062l6.5546875-2.9765625
            C19.0234375,10.8725586,19,10.6875,19,10.5c0-0.3383789,0.0654297-0.6586914,0.1953125-0.9609375
            c0.1298828-0.3017578,0.3125-0.5703125,0.546875-0.8046875c0.2294922-0.2290039,0.4951172-0.4086914,0.796875-0.5390625
            C20.8408203,8.0654297,21.1611328,8,21.5,8S22.1601562,8.0654297,22.4648438,8.1953125z"
        />
      </g>
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path
          d="M22.4648438,8.1953125c0.3046875,0.1303711,0.5712891,0.3100586,0.8007812,0.5390625
            c0.2294922,0.2294922,0.4091797,0.4960938,0.5390625,0.8007812S24,10.1616211,24,10.5
            c0,0.3388672-0.0654297,0.6591797-0.1953125,0.9609375c-0.1298828,0.3022461-0.3095703,0.5678711-0.5390625,0.796875
            c-0.234375,0.234375-0.5029297,0.4169922-0.8046875,0.546875C22.1591797,12.9350586,21.8388672,13,21.5,13
            c-0.390625,0-0.7646484-0.0922852-1.1210938-0.2773438c-0.3564453-0.1845703-0.6552734-0.4360352-0.8945312-0.7539062
            l-6.5546875,2.9765625C12.9765625,15.1225586,13,15.3076172,13,15.5c0,0.2138672-0.0390625,0.4560547-0.1171875,0.7265625
            l6.71875,3.6640625c0.234375-0.2753906,0.5195312-0.4931641,0.8554688-0.6523438C20.7929688,19.0795898,21.140625,19,21.5,19
            c0.3388672,0,0.6601562,0.0654297,0.9648438,0.1953125c0.3046875,0.1308594,0.5712891,0.3105469,0.8007812,0.5390625
            c0.2294922,0.2294922,0.4091797,0.4960938,0.5390625,0.8007812S24,21.1621094,24,21.5
            c0,0.3388672-0.0654297,0.6591797-0.1953125,0.9609375c-0.1298828,0.3027344-0.3095703,0.5683594-0.5390625,0.796875
            c-0.234375,0.234375-0.5029297,0.4169922-0.8046875,0.546875C22.1591797,23.9355469,21.8388672,24,21.5,24
            c-0.3330078,0-0.6513672-0.0644531-0.953125-0.1953125c-0.3017578-0.1298828-0.5703125-0.3125-0.8046875-0.546875
            s-0.4169922-0.5019531-0.546875-0.8046875C19.0654297,22.1513672,19,21.8339844,19,21.5
            c0-0.2128906,0.0390625-0.4550781,0.1171875-0.7265625l-6.71875-3.6640625
            c-0.234375,0.2763672-0.5195312,0.4936523-0.8554688,0.6523438C11.2070312,17.9208984,10.859375,18,10.5,18
            c-0.3334961,0-0.6513672-0.0649414-0.953125-0.1953125c-0.3022461-0.1298828-0.5703125-0.3125-0.8046875-0.546875
            s-0.4169922-0.5024414-0.546875-0.8046875C8.0649414,16.1513672,8,15.8334961,8,15.5
            c0-0.3383789,0.0649414-0.6586914,0.1953125-0.9609375c0.1298828-0.3017578,0.3125-0.5703125,0.546875-0.8046875
            c0.2290039-0.2290039,0.4946289-0.4086914,0.796875-0.5390625C9.8408203,13.0654297,10.1611328,13,10.5,13
            c0.390625,0,0.7641602,0.0927734,1.1210938,0.2773438c0.3564453,0.1850586,0.6547852,0.4365234,0.8945312,0.7539062
            l6.5546875-2.9765625C19.0234375,10.8725586,19,10.6875,19,10.5c0-0.3383789,0.0654297-0.6586914,0.1953125-0.9609375
            c0.1298828-0.3017578,0.3125-0.5703125,0.546875-0.8046875c0.2294922-0.2290039,0.4951172-0.4086914,0.796875-0.5390625
            C20.8408203,8.0654297,21.1611328,8,21.5,8S22.1601562,8.0654297,22.4648438,8.1953125z M9.9335938,14.1171875
            c-0.1796875,0.078125-0.3398438,0.1875-0.4804688,0.328125c-0.1459961,0.1459961-0.2578125,0.3085938-0.3359375,0.4882812
            S9,15.3022461,9,15.5c0,0.1982422,0.0390625,0.3867188,0.1171875,0.5664062S9.3071289,16.40625,9.453125,16.546875
            c0.140625,0.1459961,0.3007812,0.2578125,0.4804688,0.3359375S10.3017578,17,10.5,17
            c0.1977539,0,0.3867188-0.0390625,0.5664062-0.1171875s0.3422852-0.1899414,0.4882812-0.3359375
            c0.140625-0.140625,0.25-0.3007812,0.328125-0.4804688S12,15.6982422,12,15.5c0-0.1977539-0.0390625-0.3867188-0.1171875-0.5664062
            s-0.1875-0.3422852-0.328125-0.4882812c-0.1459961-0.140625-0.3085938-0.25-0.4882812-0.328125S10.6977539,14,10.5,14
            C10.3017578,14,10.1132812,14.0390625,9.9335938,14.1171875z M20.9335938,9.1171875
            c-0.1796875,0.078125-0.3398438,0.1875-0.4804688,0.328125c-0.1455078,0.1459961-0.2578125,0.3085938-0.3359375,0.4882812
            S20,10.3022461,20,10.5c0,0.1982422,0.0390625,0.3867188,0.1171875,0.5664062s0.1904297,0.3398438,0.3359375,0.4804688
            c0.140625,0.1459961,0.3007812,0.2578125,0.4804688,0.3359375S21.3017578,12,21.5,12s0.3867188-0.0390625,0.5664062-0.1171875
            s0.3427734-0.1899414,0.4882812-0.3359375c0.140625-0.140625,0.25-0.3007812,0.328125-0.4804688S23,10.6982422,23,10.5
            c0-0.1977539-0.0390625-0.3867188-0.1171875-0.5664062s-0.1875-0.3422852-0.328125-0.4882812
            c-0.1455078-0.140625-0.3085938-0.25-0.4882812-0.328125S21.6982422,9,21.5,9S21.1132812,9.0390625,20.9335938,9.1171875z
            M20.9335938,20.1171875c-0.1796875,0.078125-0.3398438,0.1875-0.4804688,0.328125
            c-0.1455078,0.1464844-0.2578125,0.3085938-0.3359375,0.4882812S20,21.3027344,20,21.5
            c0,0.1982422,0.0390625,0.3867188,0.1171875,0.5664062s0.1904297,0.3398438,0.3359375,0.4804688
            c0.140625,0.1464844,0.3007812,0.2578125,0.4804688,0.3359375S21.3017578,23,21.5,23s0.3867188-0.0390625,0.5664062-0.1171875
            s0.3427734-0.1894531,0.4882812-0.3359375c0.140625-0.140625,0.25-0.3007812,0.328125-0.4804688S23,21.6982422,23,21.5
            c0-0.1972656-0.0390625-0.3867188-0.1171875-0.5664062s-0.1875-0.3417969-0.328125-0.4882812
            c-0.1455078-0.140625-0.3085938-0.25-0.4882812-0.328125S21.6982422,20,21.5,20S21.1132812,20.0390625,20.9335938,20.1171875z"
        />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec
