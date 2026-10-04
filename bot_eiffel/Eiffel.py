from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

driver = webdriver.Firefox()
driver = webdriver.Firefox(executable_path="geckodriver.exe")
driver.get("https://www.google.fr/maps/@48.8587374,2.1822302,11z")

time.sleep(5)

barre_recherche = driver.find_element(By.ID, "searchboxinput")
barre_recherche.send_keys("La Tour Eiffel")

time.sleep(5)

btn_itineraire = driver.find_element(By.ID, "hArJGc")
btn_itineraire.click()

time.sleep(10)

loop = driver.find_element(By.CLASS_NAME, "mL3xi")
loop.click()
