// ✅ ChatScreen.js
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Image,
  StyleSheet,
  Modal,
  Keyboard,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ChatScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, avatar } = route.params || { name: 'Unknown User', avatar: null };

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const flatListRef = useRef();

  const sendMessage = (text, image = null) => {
    const newMessage = {
      id: Date.now().toString(),
      text,
      image,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');
    setShowEmojis(false);
    Keyboard.dismiss();
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  const pickImage = async () => {
    setMenuVisible(false);
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (!result.canceled) {
      sendMessage('', result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    setMenuVisible(false);
    const result = await ImagePicker.launchCameraAsync({ quality: 0.5 });
    if (!result.canceled) {
      sendMessage('', result.assets[0].uri);
    }
  };

  const shareLocation = () => {
    setMenuVisible(false);
    sendMessage('📍 Location shared (mock)');
  };

  const handleSend = () => {
    if (input.trim()) sendMessage(input.trim());
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userMessage : styles.otherMessage,
      ]}
    >
      {item.image && <Image source={{ uri: item.image }} style={styles.messageImage} />}
      {item.text ? <Text style={styles.messageText}>{item.text}</Text> : null}
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}
    >
      {/* ✅ Top Bar with User Info */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#D84315" />
        </TouchableOpacity>
        <View style={styles.userSection}>
          {avatar && <Image source={{ uri: avatar }} style={styles.avatar} />}
          <Text style={styles.userName}>{name}</Text>
        </View>
        <View style={styles.callIcons}>
          <TouchableOpacity onPress={() => alert('Audio call initiated')}>
            <Ionicons name="call" size={22} color="#D84315" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Video call initiated')}>
            <Ionicons name="videocam" size={22} color="#D84315" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.messages}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
        showsVerticalScrollIndicator={false}
      />

      {/* Emoji Selector */}
      {showEmojis && (
        <EmojiSelector
          category={Categories.all}
          showSearchBar={false}
          onEmojiSelected={(emoji) => setInput((prev) => prev + emoji)}
          style={{ height: 250, backgroundColor: '#FFF3E0' }}
        />
      )}

      {/* Modal for + Menu */}
      <Modal visible={menuVisible} transparent animationType="slide">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.menu}>
            <Text style={styles.menuTitle}>Choose an option</Text>
            <View style={styles.menuOptions}>
              <TouchableOpacity style={styles.menuItem} onPress={pickImage}>
                <Text style={styles.emoji}>🖼</Text>
                <Text style={styles.menuLabel}>Photos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={takePhoto}>
                <Text style={styles.emoji}>📸</Text>
                <Text style={styles.menuLabel}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={shareLocation}>
                <Text style={styles.emoji}>📍</Text>
                <Text style={styles.menuLabel}>Location</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Input Row */}
      <View style={styles.inputRow}>
        <TouchableOpacity onPress={() => setMenuVisible(true)} style={styles.iconButton}>
          <Entypo name="plus" size={24} color="#D84315" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
            setShowEmojis((prev) => !prev);
          }}
          style={styles.iconButton}
        >
          <Entypo name="emoji-happy" size={24} color="#D84315" />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Type a message"
          placeholderTextColor="#888"
          value={input}
          onChangeText={setInput}
        />

        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Ionicons name="send" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="microphone" size={24} color="#D84315" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF3E0' },

  // ✅ Chat header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFF3E0',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 12,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  callIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  icon: {
    padding: 4,
  },

  // ✅ Messages
  messages: {
    padding: 16,
    paddingBottom: 100,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  messageContainer: {
    maxWidth: '75%',
    borderRadius: 18,
    padding: 12,
    marginBottom: 12,
    alignSelf: 'flex-start',
    backgroundColor: '#FFE0B2',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#D84315',
  },
  messageText: {
    fontSize: 15,
    color: '#fff',
  },
  timestamp: {
    fontSize: 10,
    color: '#fff',
    marginTop: 6,
    alignSelf: 'flex-end',
  },
  messageImage: {
    width: 180,
    height: 130,
    borderRadius: 12,
    marginBottom: 6,
  },

  // ✅ Input
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    fontSize: 15,
    marginHorizontal: 8,
  },
  sendButton: {
    backgroundColor: '#D84315',
    padding: 10,
    borderRadius: 25,
  },
  iconButton: {
    padding: 6,
  },

  // ✅ Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'flex-end',
  },
  menu: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
    color: '#D84315',
  },
  menuOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  menuItem: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 30,
  },
  menuLabel: {
    marginTop: 6,
    fontSize: 14,
    color: '#333',
  },
});