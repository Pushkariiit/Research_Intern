// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IoTDeviceManager {
    
    // Structure to store device details
    struct Device {
        string deviceId;
        address owner;
        bool isRegistered;
        bool isActive;
    }

    // Mapping from device ID to Device
    mapping(string => Device) private devices;
    
    // Events
    event DeviceRegistered(string deviceId, address owner);
    event DeviceActivated(string deviceId);
    event DeviceDeactivated(string deviceId);
    event DeviceAccessed(string deviceId, address accessor);
    
    // Modifier to ensure only the device owner can perform certain actions
    modifier onlyOwner(string memory _deviceId) {
        require(devices[_deviceId].owner == msg.sender, "Not authorized");
        _;
    }
    
    // Function to register a new IoT device
    function registerDevice(string memory _deviceId) public {
        require(!devices[_deviceId].isRegistered, "Device already registered");
        
        devices[_deviceId] = Device({
            deviceId: _deviceId,
            owner: msg.sender,
            isRegistered: true,
            isActive: true
        });
        
        emit DeviceRegistered(_deviceId, msg.sender);
    }
    
    // Function to activate a device
    function activateDevice(string memory _deviceId) public onlyOwner(_deviceId) {
        require(devices[_deviceId].isRegistered, "Device not registered");
        devices[_deviceId].isActive = true;
        emit DeviceActivated(_deviceId);
    }
    
    // Function to deactivate a device
    function deactivateDevice(string memory _deviceId) public onlyOwner(_deviceId) {
        require(devices[_deviceId].isRegistered, "Device not registered");
        devices[_deviceId].isActive = false;
        emit DeviceDeactivated(_deviceId);
    }
    
    // Function to access a device (simulates an action performed on the device)
    function accessDevice(string memory _deviceId) public onlyOwner(_deviceId) {
        require(devices[_deviceId].isRegistered, "Device not registered");
        require(devices[_deviceId].isActive, "Device is not active");
        
        // Log device access
        emit DeviceAccessed(_deviceId, msg.sender);
        
        // Perform device action (This could be expanded to include actual device logic)
    }
    
    // Function to get device details (Only the owner can view)
    function getDeviceDetails(string memory _deviceId) public view onlyOwner(_deviceId) returns (string memory, address, bool, bool) {
        Device memory device = devices[_deviceId];
        return (device.deviceId, device.owner, device.isRegistered, device.isActive);
    }
}
