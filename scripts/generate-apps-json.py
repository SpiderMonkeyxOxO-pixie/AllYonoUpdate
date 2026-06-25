import json
from collections import Counter

old_apps = [
    ("101Z", "101z", "/images/games/101z.webp", "https://101zvip2.com/?code=398LS183AB2&t=1761655152", "misc"),
    ("567 Slots", "567-slots", "/images/games/567-slots.webp", "https://567slots22.com/?code=9UX4YQ28P28&t=1761655076", "slots"),
    ("777 Game", "777game", "/images/games/777game.webp", "https://www.777game0.com/?code=H53SKREANMZ&t=1761878931", "777"),
    ("789 Jackpot", "789-jackpot", "/images/games/789-jackpot.webp", "https://789jackpots789.com/?code=VJJGANTLPWB&t=1761713206", "slots"),
    ("ABC Rummy", "abc-rummy", "/images/games/abc-rummy.webp", "https://www.11abcrummy.com/?code=6X44DU7CVLN&t=1761713732", "rummy"),
    ("Bet 213", "bet-213", "/images/games/bet-213.webp", "https://www.bet213.cc/?code=2QT8E6SY5R3&t=1761713801", "misc"),
    ("Bingo 101", "bingo-101", "/images/games/bingo-101.webp", "https://bingo101n.com/?code=3WFSBEZLPYL&t=1761713889", "arcade"),
    ("Boss Rummy", "boss-rummy", "/images/games/boss-rummy.webp", "https://www.bossrummyr.com/?code=9HFJ28QUSPR&t=1766372532", "rummy"),
    ("Club INR", "club-inr", "/images/games/club-inr.webp", "http://clubinr5.xyz/?code=WZJMGMZ4U1K&t=1761722924", "misc"),
    ("Game Rummy", "game-rummy", "/images/games/game-rummy.webp", "https://gamesrummy.club/?code=GAFDVUWWYBV&t=1761713955", "rummy"),
    ("Gogo Rummy", "gogo-rummy", "/images/games/gogo-rummy.webp", "https://www.gogorummy16.com/?code=V4U6SUHF9FZ&t=1761714176", "rummy"),
    ("Hi Rummy", "hi-rummy", "/images/games/hi-rummy.webp", "https://www.hirummyagent.info/?code=RX33WPMEYAX&t=1761714324", "rummy"),
    ("Hindi 777", "hindi777", "/images/games/hindi777.webp", "https://www.hindi777agent.com/?code=7LF62XGS8GT&t=1761724743", "777"),
    ("Ind Club", "ind-club", "/images/games/ind-club.webp", "https://indclub9.com/?code=W23E2SHD7PY&t=1761725038", "misc"),
    ("Ind Rummy", "ind-rummy", "/images/games/ind-rummy.webp", "https://indrummybet3.com/?code=R9ADC3HL1U6&t=1761714429", "rummy"),
    ("Ind Slots", "ind-slots", "/images/games/ind-slots.webp", "https://indslotse.com/?code=T2QSBUR7LT4&t=1761714641", "slots"),
    ("INR Rummy", "inr-rummy", "/images/games/inr-rummy.webp", "https://inrrummy.club/?code=JMQ6RYF5BT6&t=1767499039", "rummy"),
    ("Jahio 777", "jahio-777", "/images/games/jahio-777.webp", "https://www.jaiho77772.com/?code=98XX54KBP3V&t=1761715128", "777"),
    ("Jaiho Arcade", "jaiho-arcade", "/images/games/jaiho-arcade.webp", "https://www.jaihoarcade18.com/?code=74S26KHLRJD&t=1761715167", "arcade"),
    ("Jaiho Rummy", "jaiho-rummy", "/images/games/jaiho-rummy.webp", "https://jaihorummy1.com/?code=3NPSEJRCPZW&t=1761715375", "rummy"),
    ("Jaiho Slot", "jaiho-slot", "/images/games/jaiho-slot.webp", "https://www.jaihoslots23.com/?code=QJSJQQDZDDM&t=1761715427", "slots"),
    ("Jaiho Spin", "jaiho-spin", "/images/games/jaiho-spin.webp", "https://jaihospin11.com/?code=416GL765W3A&t=1761715472", "spin"),
    ("Jaiho Win", "jaiho-win", "/images/games/jaiho-win.webp", "https://www.jaihowin11.com/?code=XZDTYJ1RY1Z&t=1761715686", "misc"),
    ("Jaiho91", "jaiho91", "/images/games/jaiho91.webp", "https://91jaihoapp.com/?code=C4238P5H5G8&t=1781940814", "misc"),
    ("Joy Rummy", "joy-rummy", "/images/games/joy-rummy.webp", "https://www.joyrummy.me/?code=J5KYGYLKSDD&t=1768444774", "rummy"),
    ("Love Rummy", "love-rummy", "/images/games/love-rummy.webp", "https://www.loverummy7.com/?code=R6KUXVMQEB1&t=1761715802", "rummy"),
    ("Maha Games", "maha-games", "/images/games/maha-games.webp", "https://mahagames.store/?code=J245RQFLS2L&t=1761715886", "misc"),
    ("MBM Bet", "mbm-bet", "/images/games/mbm-bet.webp", "https://www.mbmbet14.com/?code=UPHMK55JNJ6&t=1761716008", "misc"),
    ("Neta Vip", "neta-vip", "/images/games/neta-vip.webp", "https://www.neta1.vip/?code=DR0D36UVVZX&t=1761716155", "vip"),
    ("OK Rummy", "okrummy-e1760950706977-1", "/images/games/okrummy-e1760950706977-1.webp", "https://www.okrummy42.com/?code=H2G24LRWC8L&t=1761728136", "rummy"),
    ("Rumble Rummy", "rumble-rummy", "/images/games/rumble-rummy.webp", "https://www.rumblerummy1.club/?code=82M21AWEVEV&t=1761716441", "rummy"),
    ("Rummy 91", "rummy-91", "/images/games/rummy-91.webp", "https://rummy91g.com/?code=UXT3ZZWQHX8&t=1761716826", "rummy"),
    ("Rummy Ludo", "rummy-ludo-logo", "/images/games/rummy-ludo-logo.webp", "https://rummyludo.help/?code=UWPKN64A3KD&t=1762838300", "rummy"),
    ("Rummy77", "rummy77", "/images/games/rummy77.webp", "https://rummy77a.com/?code=F3VZY2CL5KV&t=1763712864", "rummy"),
    ("Rummy888", "rummy888", "/images/games/rummy888.webp", "https://rummy888vip15.com/?code=TPUK4VF51V9&t=1765113963", "rummy"),
    ("Saga Slots", "saga-slots", "/images/games/saga-slots.webp", "https://www.sagaslotsww.com/?code=0QH9UVHARQU&t=1761716899", "slots"),
    ("Share Slots", "share-slots", "/images/games/share-slots.webp", "https://share977.com/?code=YAZRMEX5W98&t=1761717153", "slots"),
    ("Slot Spin", "slot-spin", "/images/games/slot-spin.webp", "https://www.slotsspinj.com/?code=C1A5F6PQW4M&t=1761717254", "spin"),
    ("Slots Winner", "slots-winner", "/images/games/slots-winner.webp", "https://slotswinneragents.com/?code=PGVWTWRNB6F&t=1761717380", "slots"),
    ("Spin 101", "spin-101", "/images/games/spin-101.webp", "https://spin101-e.org/?code=Z9BR1AXYMH3&t=1761717487", "spin"),
    ("Spin 777", "spin-777", "/images/games/spin-777.webp", "https://spin777-t.com/?code=YLWAEF9UZ9W&t=1761717548", "spin"),
    ("Spin Crush", "spin-crush", "/images/games/spin-crush.webp", "https://spincrush46.com/?code=ADE7MLL2KQZ&t=1761717840", "spin"),
    ("Spin Gold", "spin-gold", "/images/games/spin-gold.webp", "https://spingoldvipagent.net/?code=S9VFE5T8JDS&t=1761717892", "spin"),
    ("Spin Winner", "spin-winner", "/images/games/spin-winner.webp", "https://spinwinner28.com/?code=QVT2P3HKTUZ&t=1761717941", "spin"),
    ("Top Rummy", "top-rummy", "/images/games/top-rummy.webp", "https://www.toprummy.cc/?code=M4G2WX7PAUF&t=1761718015", "rummy"),
    ("Yes Spin", "yes-spin", "/images/games/yes-spin.webp", "https://www.yesspin77.com/?code=47TMD53C9SA&t=1761718099", "spin"),
    ("Yn 777", "yn-777", "/images/games/yn-777.webp", "https://www.y754.com/?code=4SWBALCES8G&t=1761718190", "777"),
    ("Yono 777", "yono-777", "/images/games/yono-777.webp", "https://yono777agentrefer.net/?code=ZMRZ6SUQQZ2&t=1761718243", "777"),
    ("Yono Arcade", "yono-arcade", "/images/games/yono-arcade.webp", "https://uonoarcadeagents2.com/?code=96LUT957MWS&t=1761718992", "arcade"),
    ("Yono Games", "yono-games", "/images/games/yono-games.webp", "https://uonogames3.com/?code=GK1EVT15SS7&t=1761719127", "misc"),
    ("Yono Rummy", "yono-rummy", "/images/games/yono-rummy.webp", "https://yonorummymm.com/?code=VIP3Z76MJCF&t=1761719297", "rummy"),
    ("Yono Slots", "yono-slots", "/images/games/yono-slots.webp", "https://www.yonoslotsr.com/?code=59YBLQ1756L&t=1761719575", "slots"),
    ("Yono Vip", "yono-vip", "/images/games/yono-vip.webp", "https://uonovip0.com/?code=9U8WLAJJSM5&t=1761719729", "vip"),
]

new_apps = [
    ("Ind Bingo", "ind-bingo", "/images/games/ind-bingo.webp", None, "bingo"),
    ("Spin Lucky", "spin-lucky", "/images/games/spin-lucky.webp", None, "spin"),
]

CAT_MAP = {"777": "sevens", "rummy": "rummy", "arcade": "arcade", "vip": "vip", "slots": "slots", "spin": "spin", "bingo": "bingo"}

MISC_REASSIGN = {
    "101z": "arcade",
    "bet-213": "rummy",
    "club-inr": "vip",
    "ind-club": "vip",
    "jaiho-win": "spin",
    "jaiho91": "rummy",
    "maha-games": "arcade",
    "mbm-bet": "rummy",
    "yono-games": "arcade",
}

FORCE_CATEGORY = {"bingo-101": "bingo"}

CATEGORY_LABEL = {
    "rummy": "rummy-style",
    "slots": "slot-style",
    "spin": "spin-style",
    "sevens": "777-style",
    "arcade": "arcade-style",
    "vip": "VIP-tier",
    "bingo": "bingo-style",
}

FEATURED_SLUGS = {"yono-games", "yono-rummy", "yono-arcade", "yono-777", "jaiho91"}


def make_faq(name):
    return [
        {
            "q": "Does AllYonoUpdate.com host the " + name + " APK file?",
            "a": "No. AllYonoUpdate.com does not host or operate any APK files. The Download button leads directly to " + name + "'s own website, not to a file stored here.",
        },
        {
            "q": "Has AllYonoUpdate.com verified " + name + "'s bonus or referral terms?",
            "a": "No. AllYonoUpdate.com has not independently verified the bonus, code, or referral terms shown on " + name + "'s own website.",
        },
        {
            "q": "How often is this app record reviewed?",
            "a": "This record is reviewed whenever a meaningful change can be confirmed, so the last-checked date reflects the most recent catalog check, not a live, real-time feed.",
        },
    ]


def make_description(name, cat_label):
    article = "an" if cat_label[0].lower() in "aeiou" else "a"
    return (
        name + " is " + article + " " + cat_label + " app tracked in the All Yono directory. "
        "AllYonoUpdate.com records its current download link and catalog details for reference; "
        "this page does not host the " + name + " APK file."
    )


apps_out = []
for name, slug, icon, apkUrl, old_cat in old_apps + new_apps:
    if slug in FORCE_CATEGORY:
        category = FORCE_CATEGORY[slug]
    elif old_cat == "misc":
        category = MISC_REASSIGN[slug]
    else:
        category = CAT_MAP[old_cat]

    apps_out.append({
        "id": slug,
        "name": name,
        "slug": slug,
        "category": category,
        "featured": slug in FEATURED_SLUGS,
        "description": make_description(name, CATEGORY_LABEL[category]),
        "targetKeyword": name.lower() + " apk",
        "softwareVersion": None,
        "fileSize": None,
        "minAndroid": None,
        "rating": None,
        "updated": "2026-06-25",
        "icon": icon,
        "apkUrl": apkUrl,
        "url": "/app/" + slug + "/",
        "faq": make_faq(name),
    })

apps_out.sort(key=lambda a: a["name"])

meta = {
    "siteName": "All Yono Update",
    "baseUrl": "https://allyonoupdate.com",
    "compliance": {
        "ageNotice": "This page is intended for users aged 18 and older.",
        "restrictedStates": "Some apps listed here are not available in certain Indian states, including Andhra Pradesh, Telangana, Tamil Nadu, Odisha, Assam, Nagaland, and Sikkim. This page does not state that any specific app is legal or illegal in your location, so check your state's current regulations before downloading or using any app listed here.",
        "disclaimer": "AllYonoUpdate.com does not host, develop, or operate any of the apps listed in this directory. Every Download button leads directly to the platform's own website, and AllYonoUpdate.com has not independently verified any bonus, code, referral, or reward claim shown on third-party platforms. This directory never uses winning, earning, or real-money promotional language. AllYonoUpdate.com and the apps listed in this directory are not affiliated with SBI YONO or the State Bank of India — \"Yono\" here refers to the gaming apps listed in this directory, not the SBI banking application.",
    },
}

output = {"_meta": meta, "apps": apps_out}

with open("src/data/apps.json", "w", encoding="utf-8") as f:
    json.dump(output, f, indent=2, ensure_ascii=False)
    f.write("\n")

print("Wrote " + str(len(apps_out)) + " apps")
print(Counter(a["category"] for a in apps_out))
