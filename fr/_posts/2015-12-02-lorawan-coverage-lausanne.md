---
published: true
layout: post
title: First LoRaWAN Gateway In Lausanne Connects to the Internet Of Things
author: 
  display_name: Sam
  login: sam
  email: "sam@bitmorse.com"
  url: ""
author_login: sam
author_email: "sam@bitmorse.com"
bgimage: lorabase_headline.jpg
categories: 
  - Rover
---

LoRaWAN (Long Range WAN) is a telecommunications network allowing small devices (i.e. sensors, robots, machines, meters) to communicate over long ranges at low bitrates. The simplest form of a LoRaWAN network consists of a tranceiver gateway connected to the internet and end-nodes typically on battery power.

The gateway runs on mains power because it is constantly listening for arriving packets. The end-nodes however use very low power modules operating on just a few tens of milliwatts. An example end-node tranceiver is the [RN2483 by Microchip](http://ww1.microchip.com/downloads/en/DeviceDoc/50002346A.pdf). The ranges achieved are incredible and go up to 15km line-of-sight. 
LoRa operates on the open and license-free 868 MHz range. It is ok to operate gateways and end-nodes in Switzerland as long as you stay within the duty cycle limits set by [BAKOM](http://www.bakom.admin.ch/themen/frequenzen/00652/00654/index.html?lang=en).

<b>We've installed the first open gateway of Lausanne</b> and were able to send and receive data from EPFL, UNIL and various other locations. Since our [rover](http://octanis.org/rover) uses LoRaWAN to communicate with us, it was obvious to setup a gateway. With this single gateway we're probably covering half of Lausanne as the gateway is situated on an eleven story high building. The map below shows the locations where we have tested transmission and reception successfully. <b>Any device using LoRaWAN now automatically has reception in Lausanne - for free</b>.

<img src="/img/loramap.jpg" />


The best part is that the gateway uploads all received data directly to [TheThingsNetwork](http://thethingsnetwork.org/wiki/GettingStarted) and [Semtech](http://iot.semtech.com/gateways/B8-27-EB-FF-FF-1E-40-DC/) servers. The Things Network is a global, crowdsourced, open, free and decentralized internet of things network and they have just successfully completed their Kickstarter crowdfunding campaign. Their goal is to produce affordable hardware, but also to provide the infrastructure necessary to host the data received by nodes and gateways. While their network is still in it's early days and most software in infancy, the API's are already useable. Currently, any node's data is accessible through an easy to use REST API.


If you want to use our LoRaWAN gateway in Lausanne, here's a short guide based on the [Microchip RN2483 node](http://www.microchip.com/wwwproducts/Devices.aspx?product=RN2483): 

   * Connect to the RN2483 via UART (8N1 57600).
   * Set your Network and Application Key to the default key (personal keys will be supported by TTN at a later date):
     * mac set appskey 2B7E151628AED2A6ABF7158809CF4F3C
     * mac set nwkskey 2B7E151628AED2A6ABF7158809CF4F3C
   * Choose an address for your device. This will identify your device on the network. Please use an address from the Octanis address space or [register your own](http://thethingsnetwork.org/wiki/AddressSpace).
   * Set your devices address (choose from the (hex) range 02031200 to 020312FF): 
     * mac set devaddr [device address]
   * Perform "Activation By Personalization": 
     * mac join abp
   * Send your data (hex string)! 
     * max tx uncnf 1 beefbeef
   * See if your data arrived here:
     * http://thethingsnetwork.org/api/v0/nodes/[REPLACE WITH DEVICE ADDRESS]/
   * Enjoy!

If you've configured your end-node as above, then your device will work with all TheThingsNetwork gateways all over the world (see [TheThingsNetwork Website](http://thethingsnetwork.org/) )!



###Links###

   * [Rover Node](http://thethingsnetwork.org/api/v0/nodes/08050046/)
   * [Gateway Information](http://iot.semtech.com/gateways/B8-27-EB-FF-FF-1E-40-DC/)
   * [LoRa FAQ](http://www.semtech.com/wireless-rf/lora/LoRa-FAQs.pdf)
   * [TheThingsNetwork Manifesto](https://github.com/TheThingsNetwork/Manifest)
   * [TheThingsNetwork Wiki](http://thethingsnetwork.org/wiki/)
   * [TheThingsNetwork Website](http://thethingsnetwork.org/)


###Gateway Pic###


<img src="/media/lorabase_headline.jpg" />