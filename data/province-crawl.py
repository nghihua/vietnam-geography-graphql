import requests
from bs4 import BeautifulSoup
import json
import locale
locale.setlocale(locale.LC_ALL, 'vi_VN')

# with open("../data/provinces.json") as f:
# 	provinces = json.load(f)
# 	for province in provinces:
# 		print('"{code}":"{subregion}",'.format(code=province['code'], subregion=province['subregion']))

with open("./province_codes.json") as f:
	province_codes = json.load(f)

with open("./province_subregion.json") as f:
	province_subregion = json.load(f)

with open("./zip_codes.json") as f:
	zip_codes = json.load(f)

with open("./license_plates.json") as f:
	license_plates = json.load(f)

with open("./province_websites.json") as f:
	province_websites = json.load(f)

response = requests.get(
	url="https://vi.wikipedia.org/wiki/T%E1%BB%89nh_th%C3%A0nh_Vi%E1%BB%87t_Nam",
)

properties = ["code", "name", "capital", "subregion", "population", "area", "population_density", "phone_code"]

provinces_data = [] 

if response.status_code == 200:
	soup = BeautifulSoup(response.content, 'lxml')
	geotable = soup.find('table', {'class':'wikitable sortable mw-collapsible'})
	
	# extract rows from table
	rows = geotable.find_all("tr");

	# skip first row (title row)
	for i in range(1,len(rows)):
		# text lies in <center> tag
		centers = rows[i].find_all("center");

		# delete unneeded columns
		del centers[7]
		del centers[7]

		# extract and trim text
		for j in range (len(centers)):
			centers[j] = centers[j].text.rstrip().lstrip()

		# replace no. by province code 
		centers[0] = province_codes[centers[1]]

		if (len(centers) == 8):
			centers[3] = province_subregion[centers[0]]
		if (len(centers) == 7):
			centers.insert(3, province_subregion[centers[0]])

		# convert all numbers to float US/UK style
		centers[4] = locale.atof(centers[4])
		centers[5] = locale.atof(centers[5])
		centers[6] = locale.atof(centers[6])
		
		print(centers)
		# create province dictionary
		province_temp = {
			"zip_code": zip_codes[centers[0]],
			"website": province_websites[centers[0]],
			"license_plate": license_plates[centers[0]]
		}

		for j in range (len(centers)):
			province_temp[properties[j]] = centers[j]

		# add province dictionary into province list
		provinces_data.append(province_temp)

# write to json file
with open("./provinces.json", "w") as f:
	provinces_data_json = json.dumps(provinces_data, ensure_ascii=False, indent = 2)
	f.write(provinces_data_json)

print(provinces_data)