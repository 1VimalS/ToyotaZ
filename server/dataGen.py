import random
import json

def listToString(list):
    myStr = "["

    for idx in range(len(list)):
        myStr += str(list[idx])

        if(idx != len(list) - 1):
            myStr += ", "
        else:
            myStr += "]"

    return myStr
            

speedLimitList = [40, 65, 30]

objectNames = ["temp", "temp", "badDriverTrip3"]

amountSpeeding = [0, 0, 11]
speedingUpperBound = [0, 0, 10.01]
speedingLowerBound = [0, 0, 19.99]
laneDrift = [0, 0, 1]
laneSwitch = [0, 0, 3]
accelDecel = [0, 0, 0]
trafficLight = [0, 0, 0]
noTurnSig = [0, 0, 2]


# objectNames = ["goodDriverTrip1", "goodDriverTrip2", "goodDriverTrip3"]

# amountSpeeding = [7, 12, 3]
# speedingUpperBound = [9.99, 9.99, 9.99]
# speedingLowerBound = [5.01, 5.01, 5.01]
# laneDrift = [0, 0, 0]
# laneSwitch = [2, 1, 3]
# accelDecel = [0, 0, 0]
# trafficLight = [0, 0, 0]
# noTurnSig = [0, 0, 1]


# objectNames = ["mediumDriverTrip1", "mediumDriverTrip2", "mediumDriverTrip3"]

# amountSpeeding = [3, 2, 8]
# speedingUpperBound = [9.99, 19.99, 19.99]
# speedingLowerBound = [5.01, 10.01, 10.01]
# laneDrift = [1, 0, 0]
# laneSwitch = [2, 7, 2]
# accelDecel = [0, 1, 1]
# trafficLight = [0, 0, 0]
# noTurnSig = [0, 0, 0]

speedResult = [[], [], []]
laneDrinftResult = [[], [], []]
laneSwitchResult = [[], [], []]
accelResult = [[], [], []]
trafficResult = [[], [], []]
noTurnResult = [[], [], []]
speedLimitResult = [[], [], []]

myResultArray = [{}, {}, {}]


for idx in range(3):
    for iter in range(50 - amountSpeeding[idx]):
        speedResult[idx].append(random.uniform(speedLimitList[idx], speedLimitList[idx] + 5))
        laneDrinftResult[idx].append(0)
        laneSwitchResult[idx].append(0)
        trafficResult[idx].append(0)
        noTurnResult[idx].append(0)
        accelResult[idx].append(random.uniform(-19.99, 19.99))
        speedLimitResult[idx].append(speedLimitList[idx])

    for iter in range(amountSpeeding[idx]):
        speedResult[idx].append(random.uniform(speedingLowerBound[idx], speedingUpperBound[idx]) + speedLimitList[idx])
        laneDrinftResult[idx].append(0)
        laneSwitchResult[idx].append(0)
        trafficResult[idx].append(0)
        noTurnResult[idx].append(0)
        accelResult[idx].append(random.uniform(-19.99, 19.99))
        speedLimitResult[idx].append(speedLimitList[idx])
    
    for iter in range(50):
        speedResult[idx].append(random.uniform(speedLimitList[idx], speedLimitList[idx] + 5))
        laneDrinftResult[idx].append(0)
        laneSwitchResult[idx].append(0)
        trafficResult[idx].append(0)
        noTurnResult[idx].append(0)
        accelResult[idx].append(random.uniform(-19.99, 19.99))
        speedLimitResult[idx].append(speedLimitList[idx])
    
    randomIter = random.randint(0, 99)
    for iter in range(laneDrift[idx]):
        while laneDrinftResult[idx][randomIter] != 0:
            randomIter = random.randint(0, 99)
        laneDrinftResult[idx][randomIter] = 1
    
    randomIter = random.randint(0, 99)
    for iter in range(laneSwitch[idx]):
        while laneSwitchResult[idx][randomIter] != 0:
            randomIter = random.randint(0, 99)
        laneSwitchResult[idx][randomIter] = 1

    randomIter = random.randint(0, 99)
    for iter in range(trafficLight[idx]):
        while trafficResult[idx][randomIter] != 0:
            randomIter = random.randint(0, 99)
        trafficLight[idx][randomIter] = 1

    randomIter = random.randint(0, 99)
    for iter in range(noTurnSig[idx]):
        while noTurnResult[idx][randomIter] != 0:
            randomIter = random.randint(0, 99)
        noTurnResult[idx][randomIter] = 1

    randomIter = random.randint(0, 99)
    for iter in range(accelDecel[idx]):
        while accelResult[idx][randomIter] >= 20:
            randomIter = random.randint(0, 99)
        accelResult[idx][randomIter] = random.uniform(20, 30)
    
    myResultArray[idx]["laneDepartureList"] = laneDrinftResult[idx]
    myResultArray[idx]["laneSwitchList"] = laneSwitchResult[idx]
    myResultArray[idx]["accelDecelList"] = accelResult[idx]
    myResultArray[idx]["trafficViolationList"] = trafficResult[idx]
    myResultArray[idx]["turnSigFailList"] = noTurnResult[idx]
    myResultArray[idx]["speedList"] = speedResult[idx]
    myResultArray[idx]["speedLimitList"] = speedLimitResult[idx]

with open("badDrivers.js", "w") as outfile:
# with open("medDrivers.js", "w") as outfile:
    for idx in range(3):
        outfile.write("const " + objectNames[idx] + " =  { laneDepartureList: ")
        outfile.write(listToString(myResultArray[idx]["laneDepartureList"]))
        outfile.write(", laneSwitchList: " + listToString(myResultArray[idx]["laneSwitchList"]))
        outfile.write(", accelDecelList: " + listToString(myResultArray[idx]["accelDecelList"]))
        outfile.write(", trafficViolationList: " + listToString(myResultArray[idx]["trafficViolationList"]))
        outfile.write(", turnSigFailList: " + listToString(myResultArray[idx]["turnSigFailList"]))
        outfile.write(", speedList: " + listToString(myResultArray[idx]["speedList"]))
        outfile.write(", speedLimitList: " + listToString(myResultArray[idx]["speedLimitList"]))

        outfile.write("};")
