"use client";

import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 mb-4">
      <h2 className="text-lg font-bold text-foreground">{children}</h2>
      <Separator className="mt-1" />
    </div>
  );
}

function SubSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 mb-2">
      <h3 className="text-sm font-bold text-foreground">{children}</h3>
    </div>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
}) {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-2 pr-4 text-sm font-medium text-gray-700 w-[220px] align-top">
        {label}
      </td>
      <td className="py-2 text-sm text-gray-900">{value}</td>
    </tr>
  );
}

function ParaBlock({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-gray-800 leading-relaxed mb-2">{children}</p>;
}

export default function SafetyDataSheet() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co/LDkBq16F/Untitled-design.png"
              alt="ADDIMAX Logo"
              className="h-12 w-auto"
            />
          </div>
          <div className="text-right">
            <h1 className="text-xl font-bold text-gray-900">Safety Data Sheet</h1>
            <p className="text-base text-gray-700 font-semibold">
              ADDIMAX Lithium Hydroxide
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 py-6 w-full">
        {/* Version info bar */}
        <div className="flex justify-between items-center text-xs text-gray-500 mb-6">
          <span>Version number: GHS 1.0</span>
          <span>Page: 1 / 13</span>
        </div>

        {/* ======== SECTION 1 ======== */}
        <SectionTitle>
          SECTION 1: Identification of the substance/mixture and of the
          company/undertaking
        </SectionTitle>

        <SubSection>1.1 Product identifier</SubSection>
        <table className="w-full mb-4">
          <tbody>
            <InfoRow label="Identification of the substance" value="Lithium hydroxide" />
            <InfoRow label="CAS number" value="1310-65-2" />
            <InfoRow label="Alternative name(s)" value="lithium hydroxide" />
            <InfoRow label="Article number" value="A0012009" />
          </tbody>
        </table>

        <SubSection>
          1.2 Relevant identified uses of the substance or mixture and uses
          advised against
        </SubSection>
        <table className="w-full mb-4">
          <tbody>
            <InfoRow label="Relevant identified uses" value="General use" />
            <InfoRow
              label="Uses advised against"
              value="Do not use for squirting or spraying. Do not use for products which come into direct contact with the skin."
            />
          </tbody>
        </table>

        <SubSection>
          1.3 Details of the supplier of the safety data sheet
        </SubSection>
        <div className="pl-4 text-sm text-gray-800 leading-relaxed mb-4">
          <p className="font-bold">SMK PETROCHEMICALS</p>
          <p className="font-bold">INDIA PVT. LTD.</p>
          <p>Srv No. 97/1/1/2/2, Village Kala, Silvassa, DNH &amp; DD.</p>
          <p>Pin Code- 396230, INDIA.</p>
        </div>

        <SubSection>1.4 Emergency telephone number</SubSection>
        <table className="w-full mb-4">
          <tbody>
            <InfoRow
              label="Emergency information service"
              value="9821129715"
            />
            <InfoRow label="Telephone" value="" />
            <InfoRow label="Telefax" value="" />
          </tbody>
        </table>

        {/* ======== SECTION 2 ======== */}
        <SectionTitle>SECTION 2: Hazards identification</SectionTitle>

        <SubSection>2.1 Classification of the substance or mixture</SubSection>
        <ParaBlock>Classification acc. to GHS</ParaBlock>

        <div className="overflow-x-auto mb-4">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800 hover:bg-gray-800">
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Section
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Hazard class
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Category
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Hazard class and category
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Hazard statement
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs px-2 py-1.5">3.1O</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  acute toxicity (oral)
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">4</TableCell>
                <TableCell className="text-xs px-2 py-1.5">Acute Tox. 4</TableCell>
                <TableCell className="text-xs px-2 py-1.5">H302</TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-2 py-1.5">3.2</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  skin corrosion/irritation
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">1B</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  Skin Corr. 1B
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">H314</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-2 py-1.5">3.3</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  serious eye damage/eye irritation
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">1</TableCell>
                <TableCell className="text-xs px-2 py-1.5">Eye Dam. 1</TableCell>
                <TableCell className="text-xs px-2 py-1.5">H318</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <ParaBlock>
          For full text of abbreviations: see SECTION 16.
        </ParaBlock>

        <SubSection>
          The most important adverse physicochemical, human health and
          environmental effects
        </SubSection>
        <ParaBlock>
          Skin corrosion produces an irreversible damage to the skin; namely,
          visible necrosis through the epidermis and into the dermis.
        </ParaBlock>

        <SubSection>2.2 Label elements</SubSection>
        <ParaBlock>
          <span className="font-semibold">Labelling</span>
        </ParaBlock>
        <ul className="list-none text-sm text-gray-800 space-y-1 mb-2 pl-4">
          <li>
            - <span className="font-semibold">Signal word:</span> danger
          </li>
          <li>
            - <span className="font-semibold">Pictograms:</span> GHS05, GHS07
          </li>
        </ul>

        <ParaBlock>
          - <span className="font-semibold">Hazard statements</span>
        </ParaBlock>
        <ul className="list-none text-sm text-gray-800 space-y-1 mb-2 pl-8">
          <li>H302 Harmful if swallowed.</li>
          <li>H314 Causes severe skin burns and eye damage.</li>
        </ul>

        <ParaBlock>
          - <span className="font-semibold">Precautionary statements</span>
        </ParaBlock>
        <ul className="list-none text-sm text-gray-800 space-y-1 mb-2 pl-8">
          <li>
            P260 Do not breathe dust/fume/gas/mist/vapours/spray.
          </li>
          <li>
            P280 Wear protective gloves/protective clothing/eye protection/face
            protection/hearing protection/....
          </li>
          <li>
            P301+P330+P331 IF SWALLOWED: rinse mouth. Do NOT induce vomiting.
          </li>
          <li>
            P303+P361+P353 IF ON SKIN (or hair): Take off immediately all
            contaminated clothing. Rinse skin with water or shower.
          </li>
          <li>
            P305+P351+P338 IF IN EYES: Rinse cautiously with water for several
            minutes. Remove contact lenses, if present and easy to do. Continue
            rinsing.
          </li>
          <li>
            P310 Immediately call a POISON CENTER/doctor.
          </li>
          <li>
            P501 Dispose of contents/container to industrial combustion plant.
          </li>
        </ul>

        <SubSection>2.3 Other hazards</SubSection>
        <ParaBlock>Results of PBT and vPvB assessment</ParaBlock>
        <ParaBlock>
          According to the results of its assessment, this substance is not a
          PBT or a vPvB.
        </ParaBlock>

        {/* ======== SECTION 3 ======== */}
        <SectionTitle>
          SECTION 3: Composition/information on ingredients
        </SectionTitle>

        <SubSection>3.1 Substances</SubSection>
        <table className="w-full mb-4">
          <tbody>
            <InfoRow label="Name of substance" value="Lithium hydroxide" />
          </tbody>
        </table>

        <ParaBlock>Identifiers</ParaBlock>
        <div className="overflow-x-auto mb-4">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800 hover:bg-gray-800">
                <TableHead className="text-white text-xs font-bold px-2 py-1.5" />
                <TableHead className="text-white text-xs font-bold px-2 py-1.5" />
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Specific Conc. Limits
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  M-Factors
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  ATE
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Exposure route
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell
                  className="text-xs px-2 py-1.5 font-semibold"
                  colSpan={2}
                >
                  CAS No
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">1310-65-2</TableCell>
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5" />
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell
                  className="text-xs px-2 py-1.5 font-semibold"
                  colSpan={2}
                >
                  EC No
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">215-183-4</TableCell>
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5" />
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5">-</TableCell>
                <TableCell className="text-xs px-2 py-1.5">-</TableCell>
                <TableCell className="text-xs px-2 py-1.5">500 mg/kg</TableCell>
                <TableCell className="text-xs px-2 py-1.5">oral</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <table className="w-full mb-4">
          <tbody>
            <InfoRow label="Molecular formula" value="HLiO" />
            <InfoRow label="Molar mass" value="23.95 g/mol" />
          </tbody>
        </table>

        {/* ======== SECTION 4 ======== */}
        <SectionTitle>SECTION 4: First aid measures</SectionTitle>

        <SubSection>4.1 Description of first aid measures</SubSection>
        <ParaBlock>
          <span className="font-semibold">General notes</span>
        </ParaBlock>
        <ParaBlock>
          Do not leave affected person unattended. Remove victim out of the
          danger area. Keep affected person warm, still and covered. Take off
          immediately all contaminated clothing. In all cases of doubt, or when
          symptoms persist, seek medical advice. In case of unconsciousness
          place person in the recovery position. Never give anything by mouth.
        </ParaBlock>

        <ParaBlock>
          <span className="font-semibold">Following inhalation</span>
        </ParaBlock>
        <ParaBlock>
          If breathing is irregular or stopped, immediately seek medical
          assistance and start first aid actions. In case of respiratory tract
          irritation, consult a physician. Provide fresh air.
        </ParaBlock>

        <ParaBlock>
          <span className="font-semibold">Following skin contact</span>
        </ParaBlock>
        <ParaBlock>Rinse skin with water/shower.</ParaBlock>

        <ParaBlock>
          <span className="font-semibold">Following eye contact</span>
        </ParaBlock>
        <ParaBlock>
          Remove contact lenses, if present and easy to do. Continue rinsing.
          Irrigate copiously with clean, fresh water for at least 10 minutes,
          holding the eyelids apart.
        </ParaBlock>

        <ParaBlock>
          <span className="font-semibold">Following ingestion</span>
        </ParaBlock>
        <ParaBlock>
          Rinse mouth with water (only if the person is conscious). Do NOT
          induce vomiting.
        </ParaBlock>

        <SubSection>
          4.2 Most important symptoms and effects, both acute and delayed
        </SubSection>
        <ParaBlock>Symptoms and effects are not known to date.</ParaBlock>

        <SubSection>
          4.3 Indication of any immediate medical attention and special
          treatment needed
        </SubSection>
        <ParaBlock>none</ParaBlock>

        {/* ======== SECTION 5 ======== */}
        <SectionTitle>SECTION 5: Firefighting measures</SectionTitle>

        <SubSection>5.1 Extinguishing media</SubSection>
        <ParaBlock>
          <span className="font-semibold">Suitable extinguishing media</span>
        </ParaBlock>
        <ParaBlock>
          Water, Foam, Alcohol resistant foam, ABC-powder
        </ParaBlock>

        <ParaBlock>
          <span className="font-semibold">Unsuitable extinguishing media</span>
        </ParaBlock>
        <ParaBlock>Water jet</ParaBlock>

        <SubSection>
          5.2 Special hazards arising from the substance or mixture
        </SubSection>

        <SubSection>5.3 Advice for firefighters</SubSection>
        <ParaBlock>
          In case of fire and/or explosion do not breathe fumes. Co-ordinate
          firefighting measures to the fire surroundings. Do not allow
          firefighting water to enter drains or water courses. Collect
          contaminated firefighting water separately. Fight fire with normal
          precautions from a reasonable distance.
        </ParaBlock>

        {/* ======== SECTION 6 ======== */}
        <SectionTitle>
          SECTION 6: Accidental release measures
        </SectionTitle>

        <SubSection>
          6.1 Personal precautions, protective equipment and emergency
          procedures
        </SubSection>
        <ParaBlock>
          <span className="font-semibold">For non-emergency personnel</span>
        </ParaBlock>
        <ParaBlock>Remove persons to safety.</ParaBlock>
        <ParaBlock>
          <span className="font-semibold">For emergency responders</span>
        </ParaBlock>
        <ParaBlock>
          Wear breathing apparatus if exposed to vapours/dust/spray/gases.
        </ParaBlock>

        <SubSection>6.2 Environmental precautions</SubSection>
        <ParaBlock>
          Keep away from drains, surface and ground water. Retain contaminated
          washing water and dispose of it.
        </ParaBlock>

        <SubSection>
          6.3 Methods and material for containment and cleaning up
        </SubSection>
        <ParaBlock>
          <span className="font-semibold">
            Advice on how to contain a spill
          </span>
        </ParaBlock>
        <ParaBlock>Covering of drains, Take up mechanically</ParaBlock>
        <ParaBlock>
          <span className="font-semibold">
            Advice on how to clean up a spill
          </span>
        </ParaBlock>
        <ParaBlock>Take up mechanically.</ParaBlock>
        <ParaBlock>
          <span className="font-semibold">
            Other information relating to spills and releases
          </span>
        </ParaBlock>
        <ParaBlock>
          Place in appropriate containers for disposal. Ventilate affected
          area.
        </ParaBlock>

        <SubSection>6.4 Reference to other sections</SubSection>
        <ParaBlock>
          Personal protective equipment: see section 8. Incompatible materials:
          see section 10. Disposal considerations: see section 13.
        </ParaBlock>

        {/* ======== SECTION 7 ======== */}
        <SectionTitle>SECTION 7: Handling and storage</SectionTitle>

        <SubSection>7.1 Precautions for safe handling</SubSection>
        <ParaBlock>
          <span className="font-semibold">Recommendations</span>
        </ParaBlock>
        <ul className="list-none text-sm text-gray-800 space-y-1 mb-2 pl-4">
          <li>
            - <span className="font-semibold">Measures to prevent fire as well as aerosol and dust generation</span>
          </li>
        </ul>
        <ParaBlock>
          Use local and general ventilation. Take precautionary measures against
          static discharge. Use only in well-ventilated areas. Ground/bond
          container and receiving equipment.
        </ParaBlock>
        <ul className="list-none text-sm text-gray-800 space-y-1 mb-2 pl-4">
          <li>
            - <span className="font-semibold">Specific notes/details</span>
          </li>
        </ul>
        <ParaBlock>
          Dust deposits may accumulate on all deposition surfaces in a technical
          room.
        </ParaBlock>

        <ParaBlock>
          <span className="font-semibold">
            Advice on general occupational hygiene
          </span>
        </ParaBlock>
        <ParaBlock>
          Wash hands after use. Do not eat, drink and smoke in work areas.
          Remove contaminated clothing and protective equipment before entering
          eating areas. Never keep food or drink in the vicinity of chemicals.
          Never place chemicals in containers that are normally used for food or
          drink. Keep away from food, drink and animal feedingstuffs.
        </ParaBlock>

        <SubSection>
          7.2 Conditions for safe storage, including any incompatibilities
        </SubSection>
        <ParaBlock>
          <span className="font-semibold">Managing of associated risks</span>
        </ParaBlock>
        <ul className="list-none text-sm text-gray-800 space-y-1 mb-2 pl-4">
          <li>
            - <span className="font-semibold">Explosive atmospheres</span>
          </li>
        </ul>
        <ParaBlock>Removal of dust deposits.</ParaBlock>
        <ul className="list-none text-sm text-gray-800 space-y-1 mb-2 pl-4">
          <li>
            - <span className="font-semibold">Ventilation requirements</span>
          </li>
        </ul>
        <ParaBlock>Use local and general ventilation.</ParaBlock>
        <ul className="list-none text-sm text-gray-800 space-y-1 mb-2 pl-4">
          <li>
            - <span className="font-semibold">Packaging compatibilities</span>
          </li>
        </ul>
        <ParaBlock>
          Only packagings which are approved (e.g. acc. to ADR) may be used.
        </ParaBlock>

        <SubSection>7.3 Specific end use(s)</SubSection>
        <ParaBlock>See section 16 for a general overview.</ParaBlock>

        {/* ======== SECTION 8 ======== */}
        <SectionTitle>
          SECTION 8: Exposure controls/personal protection
        </SectionTitle>

        <SubSection>8.1 Control parameters</SubSection>
        <ParaBlock>
          Occupational exposure limit values (Workplace Exposure Limits)
        </ParaBlock>

        <div className="overflow-x-auto mb-4">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800 hover:bg-gray-800">
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Country
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Name of agent
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  CAS No
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Identifier
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  TWA [ppm]
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  TWA [mg/m&sup3;]
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  STEL [ppm]
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  STEL [mg/m&sup3;]
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Ceiling-C [ppm]
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Ceiling-C [mg/m&sup3;]
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Notation
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Source
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs px-2 py-1.5">GB</TableCell>
                <TableCell className="text-xs px-2 py-1.5">dust</TableCell>
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5">WEL</TableCell>
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5">10</TableCell>
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5">i</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  EH40/2005
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-2 py-1.5">GB</TableCell>
                <TableCell className="text-xs px-2 py-1.5">dust</TableCell>
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5">WEL</TableCell>
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5">4</TableCell>
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5">r</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  EH40/2005
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-2 py-1.5">GB</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  lithium hydroxide
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">1310-65-2</TableCell>
                <TableCell className="text-xs px-2 py-1.5">WEL</TableCell>
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5">1</TableCell>
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5" />
                <TableCell className="text-xs px-2 py-1.5">
                  EH40/2005
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <ParaBlock>
          <span className="font-semibold">Notation</span>
        </ParaBlock>
        <ul className="list-none text-sm text-gray-800 space-y-1 mb-2 pl-4">
          <li>
            <strong>Ceiling-C</strong> ceiling value is a limit value above
            which exposure should not occur
          </li>
          <li>
            <strong>i</strong> inhalable fraction
          </li>
          <li>
            <strong>r</strong> respirable fraction
          </li>
          <li>
            <strong>STEL</strong> short-term exposure limit: a limit value above
            which exposure should not occur and which is related to a 15-minute
            period (unless otherwise specified)
          </li>
          <li>
            <strong>TWA</strong> time-weighted average (long-term exposure
            limit): measured or calculated in relation to a reference period of
            8 hours time-weighted average (unless otherwise specified)
          </li>
        </ul>

        <ParaBlock>
          <span className="font-semibold">Human health values</span>
        </ParaBlock>
        <ParaBlock>
          Relevant DNELs and other threshold levels
        </ParaBlock>
        <div className="overflow-x-auto mb-4">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800 hover:bg-gray-800">
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Endpoint
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Threshold level
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Protection goal, route of exposure
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Used in
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Exposure time
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs px-2 py-1.5">DNEL</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  10 mg/m&sup3;
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  human, inhalatory
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  worker (industry)
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  chronic - systemic effects
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-2 py-1.5">DNEL</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  30 mg/m&sup3;
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  human, inhalatory
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  worker (industry)
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  acute - systemic effects
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-2 py-1.5">DNEL</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  41.35 mg/kg bw/day
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  human, dermal
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  worker (industry)
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  chronic - systemic effects
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-2 py-1.5">DNEL</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  100 mg/kg bw/day
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  human, dermal
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  worker (industry)
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  acute - systemic effects
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <ParaBlock>
          <span className="font-semibold">Environmental values</span>
        </ParaBlock>
        <ParaBlock>
          Relevant PNECs and other threshold levels
        </ParaBlock>
        <div className="overflow-x-auto mb-4">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800 hover:bg-gray-800">
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Endpoint
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Threshold level
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Organism
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Environmental compartment
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Exposure time
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs px-2 py-1.5">PNEC</TableCell>
                <TableCell className="text-xs px-2 py-1.5">2.3 mg/l</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  aquatic organisms
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">freshwater</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  short-term (single instance)
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-2 py-1.5">PNEC</TableCell>
                <TableCell className="text-xs px-2 py-1.5">0.23 mg/l</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  aquatic organisms
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">marine water</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  short-term (single instance)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-2 py-1.5">PNEC</TableCell>
                <TableCell className="text-xs px-2 py-1.5">79.2 mg/l</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  aquatic organisms
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  sewage treatment plant (STP)
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  short-term (single instance)
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-2 py-1.5">PNEC</TableCell>
                <TableCell className="text-xs px-2 py-1.5">153 mg/kg</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  aquatic organisms
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  freshwater sediment
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  short-term (single instance)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-2 py-1.5">PNEC</TableCell>
                <TableCell className="text-xs px-2 py-1.5">15.3 mg/kg</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  aquatic organisms
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  marine sediment
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  short-term (single instance)
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-2 py-1.5">PNEC</TableCell>
                <TableCell className="text-xs px-2 py-1.5">28.22 mg/kg</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  terrestrial organisms
                </TableCell>
                <TableCell className="text-xs px-2 py-1.5">soil</TableCell>
                <TableCell className="text-xs px-2 py-1.5">
                  short-term (single instance)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <SubSection>8.2 Exposure controls</SubSection>
        <ParaBlock>
          <span className="font-semibold">
            Appropriate engineering controls
          </span>
        </ParaBlock>
        <ParaBlock>General ventilation.</ParaBlock>

        <ParaBlock>
          <span className="font-semibold">
            Individual protection measures (personal protective equipment)
          </span>
        </ParaBlock>

        <ParaBlock>
          <span className="font-semibold">Eye/face protection</span>
        </ParaBlock>
        <ParaBlock>Wear eye/face protection.</ParaBlock>

        <ParaBlock>
          <span className="font-semibold">Skin protection</span>
        </ParaBlock>
        <ul className="list-none text-sm text-gray-800 space-y-1 mb-2 pl-4">
          <li>
            - <span className="font-semibold">Hand protection</span>
          </li>
        </ul>
        <ParaBlock>
          In the case of wanting to use the gloves again, clean them before
          taking off and air them well.
        </ParaBlock>
        <ul className="list-none text-sm text-gray-800 space-y-1 mb-2 pl-4">
          <li>
            - <span className="font-semibold">Other protection measures</span>
          </li>
        </ul>
        <ParaBlock>
          Take recovery periods for skin regeneration. Preventive skin
          protection (barrier creams/ointments) is recommended. Wash hands
          thoroughly after handling.
        </ParaBlock>

        <ParaBlock>
          <span className="font-semibold">Respiratory protection</span>
        </ParaBlock>
        <ParaBlock>Particulate filter device (EN 143).</ParaBlock>

        <ParaBlock>
          <span className="font-semibold">
            Environmental exposure controls
          </span>
        </ParaBlock>
        <ParaBlock>
          Use appropriate container to avoid environmental contamination. Keep
          away from drains, surface and ground water.
        </ParaBlock>

        {/* ======== SECTION 9 ======== */}
        <SectionTitle>
          SECTION 9: Physical and chemical properties
        </SectionTitle>

        <SubSection>
          9.1 Information on basic physical and chemical properties
        </SubSection>
        <div className="overflow-x-auto mb-4">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800 hover:bg-gray-800">
                <TableHead className="text-white text-xs font-bold px-3 py-1.5">
                  Property
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-3 py-1.5">
                  Value
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Physical state
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">solid</TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Colour
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">white</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Odour
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">odourless</TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Melting point/freezing point
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  423.9 &deg;C at 1,013 hPa
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Boiling point or initial boiling point and boiling range
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  not determined
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Flammability
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  non-combustible
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Lower and upper explosion limit
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  not determined
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Flash point
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  not applicable
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Auto-ignition temperature
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  not determined
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Decomposition temperature
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  not relevant
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  pH (value)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  not applicable
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Kinematic viscosity
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  not relevant
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Water solubility
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  110 g/l at 20 &deg;C
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Partition coefficient n-octanol/water (log value)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  not relevant (inorganic)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Vapour pressure
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  not determined
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Density
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  not determined
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Relative vapour density
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  information on this property is not available
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-3 py-1.5 font-medium">
                  Particle size
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">150 &micro;m</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <SubSection>9.2 Other information</SubSection>
        <ParaBlock>
          Information with regard to physical hazard classes acc. to GHS
          (physical hazards): not relevant
        </ParaBlock>
        <table className="w-full mb-4">
          <tbody>
            <InfoRow label="Solid content" value="100 %" />
          </tbody>
        </table>

        {/* ======== SECTION 10 ======== */}
        <SectionTitle>SECTION 10: Stability and reactivity</SectionTitle>

        <SubSection>10.1 Reactivity</SubSection>
        <ParaBlock>
          Concerning incompatibility: see below &quot;Conditions to avoid&quot;
          and &quot;Incompatible materials&quot;.
        </ParaBlock>

        <SubSection>10.2 Chemical stability</SubSection>
        <ParaBlock>See below &quot;Conditions to avoid&quot;.</ParaBlock>

        <SubSection>10.3 Possibility of hazardous reactions</SubSection>
        <ParaBlock>No known hazardous reactions.</ParaBlock>

        <SubSection>10.4 Conditions to avoid</SubSection>
        <ParaBlock>
          There are no specific conditions known which have to be avoided.
        </ParaBlock>

        <SubSection>10.5 Incompatible materials</SubSection>
        <ParaBlock>There is no additional information.</ParaBlock>

        <SubSection>10.6 Hazardous decomposition products</SubSection>
        <ParaBlock>
          Reasonably anticipated hazardous decomposition products produced as a
          result of use, storage, spill and heating are not known. Hazardous
          combustion products: see section 5.
        </ParaBlock>

        {/* ======== SECTION 11 ======== */}
        <SectionTitle>
          SECTION 11: Toxicological information
        </SectionTitle>

        <SubSection>11.1 Information on toxicological effects</SubSection>
        <ParaBlock>Classification acc. to GHS</ParaBlock>

        <ParaBlock>
          <span className="font-semibold">Acute toxicity</span>
        </ParaBlock>
        <ParaBlock>Harmful if swallowed.</ParaBlock>
        <ParaBlock>
          GHS of the United Nations, annex 4: May be harmful in contact with
          skin or if inhaled.
        </ParaBlock>
        <ul className="list-none text-sm text-gray-800 space-y-1 mb-2 pl-4">
          <li>
            - <span className="font-semibold">Acute toxicity estimate (ATE)</span>
          </li>
        </ul>
        <table className="w-full mb-4">
          <tbody>
            <InfoRow label="Oral" value="500 mg/kg" />
          </tbody>
        </table>

        <ParaBlock>
          <span className="font-semibold">Skin corrosion/irritation</span>
        </ParaBlock>
        <ParaBlock>Causes severe skin burns and eye damage.</ParaBlock>

        <ParaBlock>
          <span className="font-semibold">
            Serious eye damage/eye irritation
          </span>
        </ParaBlock>
        <ParaBlock>Causes serious eye damage.</ParaBlock>

        <ParaBlock>
          <span className="font-semibold">
            Respiratory or skin sensitisation
          </span>
        </ParaBlock>
        <ParaBlock>
          Shall not be classified as a respiratory or skin sensitiser.
        </ParaBlock>

        <ParaBlock>
          <span className="font-semibold">Germ cell mutagenicity</span>
        </ParaBlock>
        <ParaBlock>
          Shall not be classified as germ cell mutagenic.
        </ParaBlock>

        <ParaBlock>
          <span className="font-semibold">Carcinogenicity</span>
        </ParaBlock>
        <ParaBlock>Shall not be classified as carcinogenic.</ParaBlock>

        <ParaBlock>
          <span className="font-semibold">Reproductive toxicity</span>
        </ParaBlock>
        <ParaBlock>
          Shall not be classified as a reproductive toxicant.
        </ParaBlock>

        <ParaBlock>
          <span className="font-semibold">
            Specific target organ toxicity - single exposure
          </span>
        </ParaBlock>
        <ParaBlock>
          Shall not be classified as a specific target organ toxicant (single
          exposure).
        </ParaBlock>

        <ParaBlock>
          <span className="font-semibold">
            Specific target organ toxicity - repeated exposure
          </span>
        </ParaBlock>
        <ParaBlock>
          Shall not be classified as a specific target organ toxicant (repeated
          exposure).
        </ParaBlock>

        <ParaBlock>
          <span className="font-semibold">Aspiration hazard</span>
        </ParaBlock>
        <ParaBlock>
          Shall not be classified as presenting an aspiration hazard.
        </ParaBlock>

        <SubSection>11.2 Information on other hazards</SubSection>
        <ParaBlock>There is no additional information.</ParaBlock>

        {/* ======== SECTION 12 ======== */}
        <SectionTitle>SECTION 12: Ecological information</SectionTitle>

        <SubSection>12.1 Toxicity</SubSection>
        <ParaBlock>
          Shall not be classified as hazardous to the aquatic environment.
        </ParaBlock>

        <SubSection>12.2 Persistence and degradability</SubSection>
        <ParaBlock>Data are not available.</ParaBlock>

        <SubSection>12.3 Bioaccumulative potential</SubSection>
        <ParaBlock>Data are not available.</ParaBlock>

        <SubSection>12.4 Mobility in soil</SubSection>
        <ParaBlock>Data are not available.</ParaBlock>

        <SubSection>
          12.5 Results of PBT and vPvB assessment
        </SubSection>
        <ParaBlock>Data are not available.</ParaBlock>

        <SubSection>12.6 Endocrine disrupting properties</SubSection>
        <ParaBlock>
          Information on this property is not available.
        </ParaBlock>

        <SubSection>12.7 Other adverse effects</SubSection>
        <ParaBlock>Data are not available.</ParaBlock>

        {/* ======== SECTION 13 ======== */}
        <SectionTitle>
          SECTION 13: Disposal considerations
        </SectionTitle>

        <SubSection>13.1 Waste treatment methods</SubSection>
        <ParaBlock>
          <span className="font-semibold">
            Waste treatment-relevant information
          </span>
        </ParaBlock>
        <ParaBlock>
          Recycling/reclamation of other inorganic materials.
        </ParaBlock>

        <ParaBlock>
          <span className="font-semibold">
            Sewage disposal-relevant information
          </span>
        </ParaBlock>
        <ParaBlock>
          Do not empty into drains. Avoid release to the environment. Refer to
          special instructions/safety data sheets.
        </ParaBlock>

        <ParaBlock>
          <span className="font-semibold">
            Waste treatment of containers/packagings
          </span>
        </ParaBlock>
        <ParaBlock>
          It is a dangerous waste; only packagings which are approved (e.g.
          acc. to ADR) may be used. Completely emptied packages can be recycled.
          Handle contaminated packages in the same way as the substance itself.
        </ParaBlock>

        <ParaBlock>
          <span className="font-semibold">Remarks</span>
        </ParaBlock>
        <ParaBlock>
          Please consider the relevant national or regional provisions. Waste
          shall be separated into the categories that can be handled separately
          by the local or national waste management facilities.
        </ParaBlock>

        {/* ======== SECTION 14 ======== */}
        <SectionTitle>
          SECTION 14: Transport information
        </SectionTitle>

        <SubSection>14.1 UN number or ID number</SubSection>
        <div className="overflow-x-auto mb-4">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  ADR/RID
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">UN 2680</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  IMDG-Code
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">UN 2680</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  ICAO-TI
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">UN 2680</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <SubSection>14.2 UN proper shipping name</SubSection>
        <div className="overflow-x-auto mb-4">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  ADR/RID
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  LITHIUM HYDROXIDE
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  IMDG-Code
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  LITHIUM HYDROXIDE
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  ICAO-TI
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  Lithium hydroxide
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <SubSection>14.3 Transport hazard class(es)</SubSection>
        <div className="overflow-x-auto mb-4">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  ADR/RID
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  IMDG-Code
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  ICAO-TI
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">8</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <SubSection>14.4 Packing group</SubSection>
        <div className="overflow-x-auto mb-4">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  ADR/RID
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">II</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  IMDG-Code
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">II</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  ICAO-TI
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">II</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <SubSection>14.5 Environmental hazards</SubSection>
        <ParaBlock>
          non-environmentally hazardous acc. to the dangerous goods regulations
        </ParaBlock>

        <SubSection>14.6 Special precautions for user</SubSection>
        <ParaBlock>
          Provisions for dangerous goods (ADR) should be complied within the
          premises.
        </ParaBlock>

        <SubSection>
          14.7 Maritime transport in bulk according to IMO instruments
        </SubSection>
        <ParaBlock>
          The cargo is not intended to be carried in bulk.
        </ParaBlock>

        <SubSection>
          Information for each of the UN Model Regulations
        </SubSection>
        <ParaBlock>
          <span className="font-semibold">
            Agreement concerning the International Carriage of Dangerous Goods by
            Road (ADR) - Additional information
          </span>
        </ParaBlock>
        <div className="overflow-x-auto mb-4">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Classification code
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">C6</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Danger label(s)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Excepted quantities (EQ)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">E2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Limited quantities (LQ)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">1 kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Transport category (TC)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Tunnel restriction code (TRC)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">E</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Hazard identification No
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">80</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Emergency Action Code
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">2X</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <ParaBlock>
          <span className="font-semibold">
            Regulations concerning the International Carriage of Dangerous Goods
            by Rail (RID) - Additional information
          </span>
        </ParaBlock>
        <div className="overflow-x-auto mb-4">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Classification code
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">C6</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Danger label(s)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Excepted quantities (EQ)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">E2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Limited quantities (LQ)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">1 kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Transport category (TC)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Hazard identification No
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">80</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <ParaBlock>
          <span className="font-semibold">
            International Maritime Dangerous Goods Code (IMDG) - Additional
            information
          </span>
        </ParaBlock>
        <div className="overflow-x-auto mb-4">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Marine pollutant
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Danger label(s)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Special provisions (SP)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Excepted quantities (EQ)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">E2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Limited quantities (LQ)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">1 kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  EmS
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">F-A, S-B</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Stowage category
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Segregation group
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  18 - Alkalis
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <ParaBlock>
          <span className="font-semibold">
            International Civil Aviation Organization (ICAO-IATA/DGR) -
            Additional information
          </span>
        </ParaBlock>
        <div className="overflow-x-auto mb-4">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Danger label(s)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Excepted quantities (EQ)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">E2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5 font-medium bg-gray-50">
                  Limited quantities (LQ)
                </TableCell>
                <TableCell className="text-xs px-3 py-1.5">5 kg</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* ======== SECTION 15 ======== */}
        <SectionTitle>SECTION 15: Regulatory information</SectionTitle>

        <SubSection>
          15.1 Safety, health and environmental regulations/legislation
          specific for the substance or mixture
        </SubSection>
        <ParaBlock>
          <span className="font-semibold">
            Relevant provisions of the European Union (EU)
          </span>
        </ParaBlock>

        <ParaBlock>
          <span className="font-semibold">Deco-Paint Directive</span>
        </ParaBlock>
        <table className="w-full mb-4">
          <tbody>
            <InfoRow label="VOC content" value="0 %" />
          </tbody>
        </table>

        <ParaBlock>
          <span className="font-semibold">
            Industrial Emissions Directive (IED)
          </span>
        </ParaBlock>
        <table className="w-full mb-4">
          <tbody>
            <InfoRow label="VOC content" value="0 %" />
          </tbody>
        </table>

        <ParaBlock>
          <span className="font-semibold">National regulations (GB)</span>
        </ParaBlock>
        <ParaBlock>
          List of substances subject to authorisation (GB REACH, Annex 14) /
          SVHC - candidate list: not listed
        </ParaBlock>
        <ParaBlock>
          Restrictions according to GB REACH, Annex 17: not listed
        </ParaBlock>

        <SubSection>National inventories</SubSection>
        <div className="overflow-x-auto mb-4">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800 hover:bg-gray-800">
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Country
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Inventory
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["AU", "AIIC"],
                ["CA", "DSL"],
                ["CN", "IECSC"],
                ["EU", "ECSI"],
                ["EU", "REACH Reg."],
                ["JP", "CSCL-ENCS"],
                ["KR", "KECI"],
                ["MX", "INSQ"],
                ["NZ", "NZIoC"],
                ["PH", "PICCS"],
                ["TR", "CICR"],
                ["TW", "TCSI"],
                ["US", "TSCA"],
              ].map(([country, inventory], i) => (
                <TableRow
                  key={`${country}-${inventory}`}
                  className={i % 2 === 1 ? "bg-gray-50" : ""}
                >
                  <TableCell className="text-xs px-2 py-1.5">
                    {country}
                  </TableCell>
                  <TableCell className="text-xs px-2 py-1.5">
                    {inventory}
                  </TableCell>
                  <TableCell className="text-xs px-2 py-1.5">
                    substance is listed
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <SubSection>Legend</SubSection>
        <div className="overflow-x-auto mb-4">
          <Table>
            <TableBody>
              {[
                ["AIIC", "Australian Inventory of Industrial Chemicals"],
                ["CICR", "Chemical Inventory and Control Regulation"],
                [
                  "CSCL-ENCS",
                  "List of Existing and New Chemical Substances (CSCL-ENCS)",
                ],
                ["DSL", "Domestic Substances List (DSL)"],
                [
                  "ECSI",
                  "EC Substance Inventory (EINECS, ELINCS, NLP)",
                ],
                [
                  "IECSC",
                  "Inventory of Existing Chemical Substances Produced or Imported in China",
                ],
                ["INSQ", "National Inventory of Chemical Substances"],
                ["KECI", "Korea Existing Chemicals Inventory"],
                ["NZIoC", "New Zealand Inventory of Chemicals"],
                [
                  "PICCS",
                  "Philippine Inventory of Chemicals and Chemical Substances (PICCS)",
                ],
                ["REACH Reg.", "REACH registered substances"],
                ["TCSI", "Taiwan Chemical Substance Inventory"],
                ["TSCA", "Toxic Substance Control Act"],
              ].map(([abbr, desc], i) => (
                <TableRow
                  key={abbr}
                  className={i % 2 === 1 ? "bg-gray-50" : ""}
                >
                  <TableCell className="text-xs px-2 py-1.5 font-medium w-28">
                    {abbr}
                  </TableCell>
                  <TableCell className="text-xs px-2 py-1.5">{desc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <SubSection>15.2 Chemical Safety Assessment</SubSection>
        <ParaBlock>
          No Chemical Safety Assessment has been carried out for this substance.
        </ParaBlock>

        {/* ======== SECTION 16 ======== */}
        <SectionTitle>SECTION 16: Other information</SectionTitle>

        <SubSection>Abbreviations and acronyms</SubSection>
        <div className="overflow-x-auto mb-4">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800 hover:bg-gray-800">
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Abbr.
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-2 py-1.5">
                  Descriptions of used abbreviations
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                [
                  "ADR",
                  "Accord relatif au transport international des marchandises dangereuses par route (Agreement concerning the International Carriage of Dangerous Goods by Road)",
                ],
                ["ATE", "Acute Toxicity Estimate"],
                [
                  "CAS",
                  "Chemical Abstracts Service (service that maintains the most comprehensive list of chemical substances)",
                ],
                ["Ceiling-C", "Ceiling value"],
                ["DGR", "Dangerous Goods Regulations (see IATA/DGR)"],
                ["DNEL", "Derived No-Effect Level"],
                [
                  "EC No",
                  "The EC Inventory (EINECS, ELINCS and the NLP-list) is the source for the seven-digit EC number, an identifier of substances commercially available within the EU (European Union)",
                ],
                [
                  "EH40/2005",
                  "EH40/2005 Workplace exposure limits (http://www.nationalarchives.gov.uk/doc/open-government-licence/)",
                ],
                [
                  "EINECS",
                  "European Inventory of Existing Commercial Chemical Substances",
                ],
                [
                  "ELINCS",
                  "European List of Notified Chemical Substances",
                ],
                ["EmS", "Emergency Schedule"],
                [
                  "GB REACH",
                  "The REACH etc. (Amendment etc.) (EU Exit) Regulations 2019, SI 2019/758 (as amended)",
                ],
                [
                  "GHS",
                  '"Globally Harmonized System of Classification and Labelling of Chemicals" developed by the United Nations',
                ],
                [
                  "IATA",
                  "International Air Transport Association",
                ],
                [
                  "IATA/DGR",
                  "Dangerous Goods Regulations (DGR) for the air transport (IATA)",
                ],
                [
                  "ICAO",
                  "International Civil Aviation Organization",
                ],
                [
                  "ICAO-TI",
                  "Technical instructions for the safe transport of dangerous goods by air",
                ],
                [
                  "IMDG",
                  "International Maritime Dangerous Goods Code",
                ],
                [
                  "IMDG-Code",
                  "International Maritime Dangerous Goods Code",
                ],
                ["NLP", "No-Longer Polymer"],
                [
                  "PBT",
                  "Persistent, Bioaccumulative and Toxic",
                ],
                ["PNEC", "Predicted No-Effect Concentration"],
                ["ppm", "Parts per million"],
                [
                  "REACH",
                  "Registration, Evaluation, Authorisation and Restriction of Chemicals",
                ],
                [
                  "RID",
                  "Reglement concernant le transport International ferroviaire des marchandises Dangereuses (Regulations concerning the International carriage of Dangerous goods by Rail)",
                ],
                ["STEL", "Short-term exposure limit"],
                ["TWA", "Time-weighted average"],
                ["VOC", "Volatile Organic Compounds"],
                [
                  "vPvB",
                  "Very Persistent and very Bioaccumulative",
                ],
                ["WEL", "Workplace exposure limit"],
              ].map(([abbr, desc], i) => (
                <TableRow
                  key={abbr}
                  className={i % 2 === 1 ? "bg-gray-50" : ""}
                >
                  <TableCell className="text-xs px-2 py-1.5 font-medium whitespace-nowrap">
                    {abbr}
                  </TableCell>
                  <TableCell className="text-xs px-2 py-1.5">
                    {desc}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <SubSection>
          Key literature references and sources for data
        </SubSection>
        <ParaBlock>
          Agreement concerning the International Carriage of Dangerous Goods by
          Road (ADR). Regulations concerning the International Carriage of
          Dangerous Goods by Rail (RID). International Maritime Dangerous Goods
          Code (IMDG). Dangerous Goods Regulations (DGR) for the air transport
          (IATA).
        </ParaBlock>

        <SubSection>
          List of relevant phrases (code and full text as stated in section 2
          and 3)
        </SubSection>
        <div className="overflow-x-auto mb-4">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-800 hover:bg-gray-800">
                <TableHead className="text-white text-xs font-bold px-3 py-1.5">
                  Code
                </TableHead>
                <TableHead className="text-white text-xs font-bold px-3 py-1.5">
                  Text
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5">H302</TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  Harmful if swallowed.
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="text-xs px-3 py-1.5">H314</TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  Causes severe skin burns and eye damage.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs px-3 py-1.5">H318</TableCell>
                <TableCell className="text-xs px-3 py-1.5">
                  Causes serious eye damage.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <Separator className="my-8" />

        <div className="mb-8">
          <SubSection>Disclaimer</SubSection>
          <ParaBlock>
            This information is based upon the present state of our knowledge.
            This SDS has been compiled and is solely intended for this product.
          </ParaBlock>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-auto">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <img
            src="https://i.ibb.co/LDkBq16F/Untitled-design.png"
            alt="ADDIMAX Logo"
            className="h-8 w-auto"
          />
          <p className="text-xs text-gray-500">
            Safety Data Sheet &mdash; ADDIMAX Lithium Hydroxide &mdash;
            Version GHS 1.0
          </p>
        </div>
      </footer>
    </div>
  );
}
