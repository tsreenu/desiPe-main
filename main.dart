import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'DesiPe App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        scaffoldBackgroundColor: Colors.white,
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Notice board'),
        actions: [
          Container(
            margin: EdgeInsets.only(right: 10),
            child: ElevatedButton(
              onPressed: () {},
              child: Text(
                'Gift free cash',
                style: TextStyle(fontSize: 12),
              ),
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.red,
                foregroundColor: Colors.white,
              ),
            ),
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: GridView.count(
          crossAxisCount: 2,
          crossAxisSpacing: 10,
          mainAxisSpacing: 10,
          children: [
            _buildButtonCard(context, 'Mutual Funds Offers', Icons.star, () {}),
            _buildButtonCard(context, 'Mutual Funds Offers', Icons.star, () {}),
            _buildButtonCard(context, 'Send Money', Icons.send, () {}),
            _buildButtonCard(context, 'Receive Money', Icons.download, () {}),
            _buildButtonCard(
                context, 'Mobile Recharge', Icons.phone_android, () {}),
            _buildButtonCard(context, 'Bill Payments', Icons.receipt, () {}),
            _buildButtonCard(context, 'Wallet', Icons.wallet, () {}),
            _buildButtonCard(context, 'Balance Check', Icons.visibility, () {}),
            _buildButtonCard(
                context, 'Tap to scan', Icons.qr_code_scanner, () {}),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'UPI',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.analytics),
            label: 'Investments',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.list),
            label: 'Budget',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.history),
            label: 'History',
          ),
        ],
        selectedItemColor: Colors.blue,
        unselectedItemColor: Colors.grey,
        showUnselectedLabels: true,
      ),
    );
  }

  Widget _buildButtonCard(
      BuildContext context, String label, IconData iconData, Function onTap) {
    return Card(
      elevation: 2,
      child: InkWell(
        onTap: () {
          onTap();
        },
        child: Container(
          padding: EdgeInsets.all(16),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(
                iconData,
                size: 30,
                color: Colors.blue,
              ),
              SizedBox(height: 8),
              Text(
                label,
                style: TextStyle(fontSize: 14),
                textAlign: TextAlign.center,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
